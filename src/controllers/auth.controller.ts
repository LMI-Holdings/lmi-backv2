import { Request, Response, NextFunction } from "express";
import AuthService from "../services/auth/AuthService";

class AuthController {
    async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const createdUser = await AuthService.createUser(req.body);
            return res.status(201).json(createdUser);
        } catch (err) {
            next(err);
        }
    }

    async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const updateUser = await AuthService.updateUser(req.body, req.params.id);
            // console.log({...updateUser})
            return res.status(201).json({...updateUser});
        } catch (err) {
            next(err);
        }
    }

    async getUsers(req :Request, res : Response, next : NextFunction){
        try {
            const getUsersOnly = await AuthService.getUsersOnly();
            return res.status(201).json(getUsersOnly);
        } catch (error) {
            next(error);
        }
    }

    async getAdmins(req :Request, res : Response, next : NextFunction){
        try {
            const getAdminsOnly = await AuthService.getAdminsOnly();
            return res.status(201).json(getAdminsOnly);
        } catch (error) {
            next(error);
        }
    }
    
    async getUser(req : Request, res :Response, next : NextFunction){
        try {
            const getUser =  await AuthService.getUserData(req.params.id);
            return res.status(201).json(getUser);
        } catch (error) {
            next(error)
        }
    }

    async createAdminUser(req: Request, res: Response, next: NextFunction) {
        try {
            const createdUser = await AuthService.createAdmin(req.body);
            return res.status(201).json(createdUser);
        } catch (err) {
            next(err);
        }
    }

    async verifyUser(req: Request, res: Response, next: NextFunction) {
        try {
            const verify = await AuthService.verifyUser(req.body);
            return res.status(200).json({ ...verify });
        } catch (err) {
            next(err);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const loggedIn = await AuthService.login(req.body);
            res.status(200).json(loggedIn);
        } catch (err) {
            next(err);
        }
    }
}

export default new AuthController();
