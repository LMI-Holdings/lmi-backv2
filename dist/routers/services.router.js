"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const freightService_controller_1 = __importDefault(require("../controllers/services/freightService.controller"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const overseasLogistics_controller_1 = __importDefault(require("../controllers/services/overseasLogistics.controller"));
const storage_controller_1 = __importDefault(require("../controllers/services/storage.controller"));
const router = express_1.default.Router();
//  For Feight
router.post('/freight', authMiddleware_1.authenticateToken, freightService_controller_1.default.createFreight);
router.put('/freight/:id', authMiddleware_1.authenticateToken, freightService_controller_1.default.updateFreight);
router.get('/freight', authMiddleware_1.authenticateToken, freightService_controller_1.default.getFreights);
router.get('/freight/:id', authMiddleware_1.authenticateToken, freightService_controller_1.default.getFreightById);
router.delete('/freight/:id', authMiddleware_1.authenticateToken, freightService_controller_1.default.deleteFreight);
// For Overseas
router.post('/overseas', authMiddleware_1.authenticateToken, overseasLogistics_controller_1.default.createOverseas);
router.put('/overseas/:id', authMiddleware_1.authenticateToken, overseasLogistics_controller_1.default.updateOverseas);
router.get('/overseas', authMiddleware_1.authenticateToken, overseasLogistics_controller_1.default.getOverseas);
router.get('/overseas/:id', authMiddleware_1.authenticateToken, overseasLogistics_controller_1.default.getOverseasByiD);
router.delete('/overseas/:id', authMiddleware_1.authenticateToken, overseasLogistics_controller_1.default.deleteOverseas);
// For Storage
router.post('/storage', authMiddleware_1.authenticateToken, storage_controller_1.default.createStorage);
router.put('/storage/:id', authMiddleware_1.authenticateToken, storage_controller_1.default.updateStorage);
router.get('/storage', authMiddleware_1.authenticateToken, storage_controller_1.default.getStorage);
router.get('/storage/:id', authMiddleware_1.authenticateToken, storage_controller_1.default.getStorageById);
router.delete('/storage/:id', authMiddleware_1.authenticateToken, storage_controller_1.default.deleteStorage);
exports.default = router;
