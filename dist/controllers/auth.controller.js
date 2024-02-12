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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthService_1 = __importDefault(require("../services/auth/AuthService"));
class AuthController {
    createUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdUser = yield AuthService_1.default.createUser(req.body);
                return res.status(201).json(createdUser);
            }
            catch (err) {
                next(err);
            }
        });
    }
    getUsers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getUsersOnly = yield AuthService_1.default.getUsersOnly();
                return res.status(201).json(getUsersOnly);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getAdmins(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getAdminsOnly = yield AuthService_1.default.getAdminsOnly();
                return res.status(201).json(getAdminsOnly);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getUser = yield AuthService_1.default.getUserData(req.params.id);
                return res.status(201).json(getUser);
            }
            catch (error) {
                next(error);
            }
        });
    }
    createAdminUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdUser = yield AuthService_1.default.createAdmin(req.body);
                return res.status(201).json(createdUser);
            }
            catch (err) {
                next(err);
            }
        });
    }
    verifyUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const verify = yield AuthService_1.default.verifyUser(req.body);
                return res.status(200).json(Object.assign({}, verify));
            }
            catch (err) {
                next(err);
            }
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const loggedIn = yield AuthService_1.default.login(req.body);
                res.status(200).json(loggedIn);
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = new AuthController();
