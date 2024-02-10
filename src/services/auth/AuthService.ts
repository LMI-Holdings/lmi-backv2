import { Request, Response, NextFunction } from 'express'
import { IUser, IVerifyOtp, LoginRequest, ROLE } from '../../dtos/Auth'
import { comparePasswords, hashPassword } from '../../utils/bcryptUtils'
import { User } from '../../models/User'
import OtpService from '../OtpService'
import EmailService from '../EmailService'
import { generateToken } from '../../utils/jwtUtils'

class AuthService {

    async createUser(user: IUser) {
        try {
        // Check if required properties are provided and not empty
        if (!user.email || typeof user.email !== 'string' || user.email.trim() === '') {
            throw new Error('Invalid or missing email');
        }

        if (!user.password || typeof user.password !== 'string' || user.password.trim() === '') {
            throw new Error('Invalid or missing password');
        }

        // Add more validations as needed for other properties

        const newUser = { ...user };
        const hashedPassword = await hashPassword(user.password);
        newUser.password = hashedPassword;

        const saveUser = await User.create({ ...newUser, role: ROLE.USER, isAdmin: false });

        if (saveUser) {
            const otp = await OtpService.generateAndSaveOtp(saveUser?.email);
            await EmailService.sendOtpEmail(saveUser?.email, otp);

            return { "message": `email sent to ${saveUser?.email}` };
        }
    } catch (err: any) {
        throw new Error(err.message || 'Error creating user');
    }
    }

    async createAdmin(user: IUser) {
        try {

            const newUser = {...user}
            const hashedPassword = await hashPassword(user.password);
            newUser.password = hashedPassword;

            const saveAdminUser = await User.create({...newUser, isAdmin: true, role: ROLE.ADMIN})
            if(saveAdminUser) {

                const userPayload = { id: saveAdminUser.id, email: saveAdminUser.email, isAdmin: saveAdminUser.isAdmin}
                const { password, ...userWithoutPassword } = saveAdminUser.toJSON();
                const token = generateToken({ ...userPayload })

                return { token, user: userWithoutPassword }
            }
        }
        catch(err: any) {
            throw new Error(err.message || 'Error creating admin');
        }
    }
    
    async getUsersOnly(){
        try{
            const getUsers = await User.findAll({ where: {role : 'USER'}});
            
            return getUsers;
        }
        catch (err : any){
            throw new Error(err.message || 'Error creating admin');
        }
    }
   
    async getAdminsOnly(){
        try{
            const getAdmins = await User.findAll({ where: {role : 'ADMIN'}});
            
            return getAdmins;
        }
        catch (err : any){
            throw new Error(err.message || 'Error creating admin');
        }
    }
    
    async getUserData(id : string){
        try{
            const user = await User.findOne({ where: {id : id}})

            return user;
        }catch (err : any){
            throw new Error(err.message || 'Error creating admin');
        }
    }


    async verifyUser(verifyRequest: IVerifyOtp) {
        try {

            const isValidOtp = await OtpService.isValidOtp(verifyRequest)
            const getUser = await User.findOne({ where: { email: verifyRequest.email } })

            if (isValidOtp && getUser) {
                getUser.is_verified = true
                getUser?.save()

                const userPayload = { id: getUser.id, email: getUser.email }
                const { password, ...userWithoutPassword } = getUser.toJSON();
                const token = generateToken({ ...userPayload })

                return { token, user: userWithoutPassword }
            }
        }
        catch (err: any) {
            throw new Error(err)
        }

    }


    async login(user: LoginRequest) {
        try {
            const getUser = await User.findOne({ where: { email: user.email } })
            if (!getUser) throw new Error("user does not exist")

            if (await comparePasswords(user.password, getUser.password)) {

                const userPayload = { id: getUser.id, email: getUser.email, isAdmin: getUser.isAdmin }
                const { password, ...userWithoutPassword } = getUser.toJSON();
                const token = generateToken({ ...userPayload })

                return { token, user: userWithoutPassword }
            }

            throw new Error("invalid email or password")
        }
        catch (err: any) {
            throw new Error(err)
        }
    }
}

export default new AuthService()