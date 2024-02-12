"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// management.routes.ts
const express_1 = __importDefault(require("express"));
const management_controller_1 = __importDefault(require("../controllers/management.controller"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = express_1.default.Router();
// Truck's Routes
router.post('/truck', authMiddleware_1.authenticateToken, management_controller_1.default.addTruck);
router.put('/truck/:id', authMiddleware_1.authenticateToken, management_controller_1.default.updateTruck);
router.get('/truck', authMiddleware_1.authenticateToken, management_controller_1.default.getTrucks);
router.get('/truck/:id', authMiddleware_1.authenticateToken, management_controller_1.default.getTruckById);
router.delete('/truck/:id', authMiddleware_1.authenticateToken, management_controller_1.default.deleteTruck);
// Driver's Routes
router.post('/driver', authMiddleware_1.authenticateToken, management_controller_1.default.addDriver);
router.put('/driver/:id', authMiddleware_1.authenticateToken, management_controller_1.default.updateDriver);
router.get('/driver', authMiddleware_1.authenticateToken, management_controller_1.default.getDrivers);
router.get('/driver/:id', authMiddleware_1.authenticateToken, management_controller_1.default.getDriverById);
router.delete('/driver/:id', authMiddleware_1.authenticateToken, management_controller_1.default.deleteDriver);
// Warehouse Routes
router.post('/warehouse', authMiddleware_1.authenticateToken, management_controller_1.default.createWarehouse);
router.put('/warehouse/:id', authMiddleware_1.authenticateToken, management_controller_1.default.updateWarehouse);
router.get('/warehouse', authMiddleware_1.authenticateToken, management_controller_1.default.getAllWarehouses);
router.get('/warehouse/:id', authMiddleware_1.authenticateToken, management_controller_1.default.getWarehouseById);
router.delete('/warehouse/:id', authMiddleware_1.authenticateToken, management_controller_1.default.deleteWarehouse);
exports.default = router;
