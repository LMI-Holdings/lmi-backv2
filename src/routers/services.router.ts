import express from 'express'
import FreightController from '../controllers/services/freightService.controller';
import { Freight } from '../models/Freight';
import { authenticateToken } from '../middlewares/authMiddleware';
import overseasLogisticsController from '../controllers/services/overseasLogistics.controller';
import storageController from '../controllers/services/storage.controller';


const router = express.Router();

//  For Feight
router.post('/freight', authenticateToken, FreightController.createFreight);
router.put('/freight/:id', authenticateToken, FreightController.updateFreight);
router.get('/freight', authenticateToken, FreightController.getFreights);
router.get('/freight/:id', authenticateToken, FreightController.getFreightById);
router.delete('/freight/:id', authenticateToken, FreightController.deleteFreight);

// For Overseas
router.post('/overseas', authenticateToken, overseasLogisticsController.createOverseas);
router.put('/overseas/:id', authenticateToken, overseasLogisticsController.updateOverseas);
router.get('/overseas', authenticateToken, overseasLogisticsController.getOverseas);
router.get('/overseas/:id', authenticateToken, overseasLogisticsController.getOverseasByiD);
router.delete('/overseas/:id', authenticateToken, overseasLogisticsController.deleteOverseas);


// For Storage
router.post('/storage', authenticateToken, storageController.createStorage);
router.put('/storage/:id', authenticateToken, storageController.updateStorage);
router.get('/storage', authenticateToken, storageController.getStorage);
router.get('/storage/:id', authenticateToken, storageController.getStorageById);
router.delete('/storage/:id', authenticateToken, storageController.deleteStorage);


export default router;