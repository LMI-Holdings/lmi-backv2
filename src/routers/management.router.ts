// management.routes.ts
import express from 'express';
import ManagmentController from '../controllers/management.controller';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = express.Router();

// Truck's Routes
router.post('/truck', authenticateToken, ManagmentController.addTruck);
router.put('/truck/:id', authenticateToken, ManagmentController.updateTruck);
router.get('/truck', authenticateToken, ManagmentController.getTrucks);
router.get('/truck/:id', authenticateToken, ManagmentController.getTruckById);
router.delete('/truck/:id', authenticateToken, ManagmentController.deleteTruck);

// Driver's Routes
router.post('/driver', authenticateToken, ManagmentController.addDriver);
router.put('/driver/:id', authenticateToken, ManagmentController.updateDriver);
router.get('/driver', authenticateToken, ManagmentController.getDrivers);
router.get('/driver/:id', authenticateToken, ManagmentController.getDriverById);
router.delete('/driver/:id', authenticateToken, ManagmentController.deleteDriver);

// Warehouse Routes
router.post('/warehouse', authenticateToken, ManagmentController.createWarehouse);
router.put('/warehouse/:id', authenticateToken, ManagmentController.updateWarehouse);
router.get('/warehouse', authenticateToken, ManagmentController.getAllWarehouses);
router.get('/warehouse/:id', authenticateToken, ManagmentController.getWarehouseById);
router.delete('/warehouse/:id', authenticateToken, ManagmentController.deleteWarehouse);

export default router;
