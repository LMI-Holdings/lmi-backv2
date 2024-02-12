"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Auth_1 = require("../../dtos/Auth");
const bcryptUtils_1 = require("../../utils/bcryptUtils");
const User_1 = require("../../models/User");
const OtpService_1 = __importDefault(require("../OtpService"));
const EmailService_1 = __importDefault(require("../EmailService"));
const jwtUtils_1 = require("../../utils/jwtUtils");
class AuthService {
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if required properties are provided and not empty
                if (!user.email || typeof user.email !== 'string' || user.email.trim() === '') {
                    throw new Error('Invalid or missing email');
                }
                if (!user.password || typeof user.password !== 'string' || user.password.trim() === '') {
                    throw new Error('Invalid or missing password');
                }
                // Add more validations as needed for other properties
                const newUser = Object.assign({}, user);
                const hashedPassword = yield (0, bcryptUtils_1.hashPassword)(user.password);
                newUser.password = hashedPassword;
                const saveUser = yield User_1.User.create(Object.assign(Object.assign({}, newUser), { role: Auth_1.ROLE.USER, isAdmin: false }));
                if (saveUser) {
                    const otp = yield OtpService_1.default.generateAndSaveOtp(saveUser === null || saveUser === void 0 ? void 0 : saveUser.email);
                    yield EmailService_1.default.sendOtpEmail(saveUser === null || saveUser === void 0 ? void 0 : saveUser.email, otp);
                    return { "message": `email sent to ${saveUser === null || saveUser === void 0 ? void 0 : saveUser.email}` };
                }
            }
            catch (err) {
                throw new Error(err.message || 'Error creating user');
            }
        });
    }
    createAdmin(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = Object.assign({}, user);
                const hashedPassword = yield (0, bcryptUtils_1.hashPassword)(user.password);
                newUser.password = hashedPassword;
                const saveAdminUser = yield User_1.User.create(Object.assign(Object.assign({}, newUser), { isAdmin: true, role: Auth_1.ROLE.ADMIN }));
                if (saveAdminUser) {
                    const userPayload = { id: saveAdminUser.id, email: saveAdminUser.email, isAdmin: saveAdminUser.isAdmin };
                    const _a = saveAdminUser.toJSON(), { password } = _a, userWithoutPassword = __rest(_a, ["password"]);
                    const token = (0, jwtUtils_1.generateToken)(Object.assign({}, userPayload));
                    return { token, user: userWithoutPassword };
                }
            }
            catch (err) {
                throw new Error(err.message || 'Error creating admin');
            }
        });
    }
    getUsersOnly() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getUsers = yield User_1.User.findAll({ where: { role: 'USER' } });
                return getUsers;
            }
            catch (err) {
                throw new Error(err.message || 'Error creating admin');
            }
        });
    }
    getAdminsOnly() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getAdmins = yield User_1.User.findAll({ where: { role: 'ADMIN' } });
                return getAdmins;
            }
            catch (err) {
                throw new Error(err.message || 'Error creating admin');
            }
        });
    }
    getUserData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.User.findOne({ where: { id: id } });
                return user;
            }
            catch (err) {
                throw new Error(err.message || 'Error creating admin');
            }
        });
    }
    verifyUser(verifyRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isValidOtp = yield OtpService_1.default.isValidOtp(verifyRequest);
                const getUser = yield User_1.User.findOne({ where: { email: verifyRequest.email } });
                if (isValidOtp && getUser) {
                    getUser.is_verified = true;
                    getUser === null || getUser === void 0 ? void 0 : getUser.save();
                    const userPayload = { id: getUser.id, email: getUser.email };
                    const _a = getUser.toJSON(), { password } = _a, userWithoutPassword = __rest(_a, ["password"]);
                    const token = (0, jwtUtils_1.generateToken)(Object.assign({}, userPayload));
                    return { token, user: userWithoutPassword };
                }
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getUser = yield User_1.User.findOne({ where: { email: user.email } });
                if (!getUser)
                    throw new Error("user does not exist");
                if (yield (0, bcryptUtils_1.comparePasswords)(user.password, getUser.password)) {
                    const userPayload = { id: getUser.id, email: getUser.email, isAdmin: getUser.isAdmin };
                    const _a = getUser.toJSON(), { password } = _a, userWithoutPassword = __rest(_a, ["password"]);
                    const token = (0, jwtUtils_1.generateToken)(Object.assign({}, userPayload));
                    return { token, user: userWithoutPassword };
                }
                throw new Error("invalid email or password");
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
}
exports.default = new AuthService();
