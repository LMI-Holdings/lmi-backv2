"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = express_1.default.Router();
router.post('/signup', auth_controller_1.default.createUser);
router.post('/verify', auth_controller_1.default.verifyUser);
router.post('/login', auth_controller_1.default.login);
router.get('/users', authMiddleware_1.authenticateToken, auth_controller_1.default.getUsers);
router.get('/admins', authMiddleware_1.authenticateToken, auth_controller_1.default.getAdmins);
router.get('/user/:id', authMiddleware_1.authenticateToken, auth_controller_1.default.getUser);
router.post('/signup/admin', authMiddleware_1.authenticateToken, authMiddleware_1.authAdminGuard, auth_controller_1.default.createAdminUser);
exports.default = router;
