import express from 'express'
import AuthController from '../controllers/auth.controller';
import { authAdminGuard, authenticateToken } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/signup', AuthController.createUser);
router.post('/verify', AuthController.verifyUser);
router.post('/login', AuthController.login);
router.get('/users', authenticateToken, AuthController.getUsers);
router.get('/admins', authenticateToken, AuthController.getAdmins);
router.get('/user/:id', authenticateToken, AuthController.getUser);
router.post('/signup/admin',authenticateToken, authAdminGuard, AuthController.createAdminUser)

export default router;
