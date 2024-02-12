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
const managementService_1 = __importDefault(require("../services/management/managementService"));
class ManagementController {
    addTruck(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const addedTruck = yield managementService_1.default.addTrucks(req.body);
                return res.status(201).json(addedTruck);
            }
            catch (err) {
                next(err);
            }
        });
    }
    getTruckById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const trucks = yield managementService_1.default.getTruckById(req.params.id, req.body.userId);
                return res.status(200).json(trucks);
            }
            catch (err) {
                next(err);
            }
        });
    }
    getTrucks(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const trucks = yield managementService_1.default.getAllTrucks();
                return res.status(200).json(trucks);
            }
            catch (err) {
                next(err);
            }
        });
    }
    updateTruck(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedTruck = yield managementService_1.default.updateTruck(req.params.id, req.body, req.body.userId);
                return res.status(200).json(updatedTruck);
            }
            catch (err) {
                next(err);
            }
        });
    }
    deleteTruck(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield managementService_1.default.deleteTruck(req.params.id, req.body.userId);
                return res.status(204).send();
            }
            catch (err) {
                next(err);
            }
        });
    }
    // For Drivers
    addDriver(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const addedTruck = yield managementService_1.default.addDriver(req.body);
                return res.status(201).json(addedTruck);
            }
            catch (err) {
                next(err);
            }
        });
    }
    getDriverById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const trucks = yield managementService_1.default.getDriverById(req.params.id, req.body.userId);
                return res.status(200).json(trucks);
            }
            catch (err) {
                next(err);
            }
        });
    }
    getDrivers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const trucks = yield managementService_1.default.getAllDrivers(req.body.id);
                return res.status(200).json(trucks);
            }
            catch (err) {
                next(err);
            }
        });
    }
    updateDriver(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedTruck = yield managementService_1.default.updateDriver(req.params.id, req.body, req.body.userId);
                return res.status(200).json(updatedTruck);
            }
            catch (err) {
                next(err);
            }
        });
    }
    deleteDriver(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield managementService_1.default.deleteDriver(req.params.id, req.body.userId);
                return res.status(204).send();
            }
            catch (err) {
                next(err);
            }
        });
    }
    // Warehouse
    createWarehouse(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdWarehouse = yield managementService_1.default.createWarehouse(req.body, req.body.userId);
                return res.status(201).json(createdWarehouse);
            }
            catch (err) {
                next(err);
            }
        });
    }
    getAllWarehouses(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const warehouses = yield managementService_1.default.getWarehouses(req.body.userId);
                return res.status(200).json(warehouses);
            }
            catch (err) {
                next(err);
            }
        });
    }
    getWarehouseById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const warehouseId = req.params.id;
                const warehouse = yield managementService_1.default.getWarehouseById(warehouseId, req.params.id);
                return res.status(200).json(warehouse);
            }
            catch (err) {
                next(err);
            }
        });
    }
    updateWarehouse(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const warehouseId = req.params.id;
                yield managementService_1.default.updateWarehouse(warehouseId, req.body, req.params.id);
                return res.status(200).send();
            }
            catch (err) {
                next(err);
            }
        });
    }
    deleteWarehouse(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const warehouseId = req.params.id;
                yield managementService_1.default.deleteWarehouse(warehouseId, req.params.id);
                return res.status(204).send();
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = new ManagementController;
