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
const Driver_1 = __importDefault(require("../../models/Driver"));
const Truck_1 = __importDefault(require("../../models/Truck"));
const User_1 = require("../../models/User");
const Warehouse_1 = __importDefault(require("../../models/Warehouse"));
class ManagementService {
    // For Trucks
    addTrucks(truck) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the user is an admin
                const isAdmin = yield User_1.User.findOne({
                    where: { id: truck.userId, role: 'ADMIN' },
                });
                if (isAdmin) {
                    // User is an admin, proceed to create a truck
                    const newTruck = yield Truck_1.default.create({
                        truckRegNumber: truck.truckRegNumber,
                        name: truck.name,
                        volume: truck.volume,
                        // Add any other truck details as needed
                    });
                    return newTruck;
                }
                else {
                    throw new Error("User is not an admin");
                }
            }
            catch (err) {
                throw new Error(err.message || "Error adding truck");
            }
        });
    }
    getTruckById(truckId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the user is an admin
                const isAdmin = yield User_1.User.findOne({
                    where: { id: userId, role: 'ADMIN' },
                });
                if (!isAdmin) {
                    throw new Error("User is not an admin");
                }
                const truck = yield Truck_1.default.findOne({
                    where: { id: truckId },
                });
                if (!truck) {
                    throw new Error("Truck not found");
                }
                return truck;
            }
            catch (err) {
                throw new Error(err.message || "Error getting truck");
            }
        });
    }
    getAllTrucks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the user is an admin
                const Trucks = yield Truck_1.default.findAll({});
                return Trucks;
            }
            catch (err) {
                throw new Error(err.message || "Error getting truck");
            }
        });
    }
    updateTruck(truckId, updatedDetails, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the user is an admin
                const isAdmin = yield User_1.User.findOne({
                    where: { id: userId, role: 'ADMIN' },
                });
                if (!isAdmin) {
                    throw new Error("User is not an admin");
                }
                const truck = yield Truck_1.default.findOne({
                    where: { id: truckId },
                });
                if (!truck) {
                    throw new Error("Truck not found");
                }
                // Update truck details
                yield truck.update(updatedDetails);
                return truck;
            }
            catch (err) {
                throw new Error(err.message || "Error updating truck");
            }
        });
    }
    deleteTruck(truckId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the user is an admin
                const isAdmin = yield User_1.User.findOne({
                    where: { id: userId, role: 'ADMIN' },
                });
                if (!isAdmin) {
                    throw new Error("User is not an admin");
                }
                const truck = yield Truck_1.default.findOne({
                    where: { id: truckId },
                });
                if (!truck) {
                    throw new Error("Truck not found");
                }
                // Delete the truck
                yield truck.destroy();
                return { message: "Truck deleted successfully" };
            }
            catch (err) {
                throw new Error(err.message || "Error deleting truck");
            }
        });
    }
    // For CRUD Drivers
    addDriver(driver) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the user is an admin
                const isAdmin = yield User_1.User.findOne({
                    where: { id: driver.userId, role: 'ADMIN' },
                });
                if (isAdmin) {
                    // User is an admin, proceed to create a driver
                    const newDriver = yield Driver_1.default.create({
                        driverId: driver.id,
                        name: driver.firstName,
                        phoneNumber: driver.phoneNumber,
                        // Add any other driver details as needed
                    });
                    return newDriver;
                }
                else {
                    throw new Error("User is not an admin");
                }
            }
            catch (err) {
                throw new Error(err.message || "Error adding driver");
            }
        });
    }
    getDriverById(driverId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the user is an admin
                const isAdmin = yield User_1.User.findOne({
                    where: { id: userId, role: 'ADMIN' },
                });
                if (!isAdmin) {
                    throw new Error("User is not an admin");
                }
                const driver = yield Driver_1.default.findOne({
                    where: { id: driverId },
                });
                if (!driver) {
                    throw new Error("Driver not found");
                }
                return driver;
            }
            catch (err) {
                throw new Error(err.message || "Error getting driver");
            }
        });
    }
    getAllDrivers(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the user is an admin
                const isAdmin = yield User_1.User.findOne({
                    where: { id: userId, role: 'ADMIN' },
                });
                if (!isAdmin) {
                    throw new Error("User is not an admin");
                }
                const drivers = yield Driver_1.default.findAll();
                return drivers;
            }
            catch (err) {
                throw new Error(err.message || "Error getting drivers");
            }
        });
    }
    updateDriver(driverId, updatedDetails, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the user is an admin
                const isAdmin = yield User_1.User.findOne({
                    where: { id: userId, role: 'ADMIN' },
                });
                if (!isAdmin) {
                    throw new Error("User is not an admin");
                }
                const driver = yield Driver_1.default.findOne({
                    where: { id: driverId },
                });
                if (!driver) {
                    throw new Error("Driver not found");
                }
                // Update driver details
                yield driver.update(updatedDetails);
                return driver;
            }
            catch (err) {
                throw new Error(err.message || "Error updating driver");
            }
        });
    }
    deleteDriver(driverId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the user is an admin
                const isAdmin = yield User_1.User.findOne({
                    where: { id: userId, role: 'ADMIN' },
                });
                if (!isAdmin) {
                    throw new Error("User is not an admin");
                }
                const driver = yield Driver_1.default.findOne({
                    where: { id: driverId },
                });
                if (!driver) {
                    throw new Error("Driver not found");
                }
                // Delete the driver
                yield driver.destroy();
                return { message: "Driver deleted successfully" };
            }
            catch (err) {
                throw new Error(err.message || "Error deleting driver");
            }
        });
    }
    // Warehouse operations
    createWarehouse(warehouseDetails, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the user is an admin
                const isAdmin = yield User_1.User.findOne({
                    where: { id: userId, role: 'ADMIN' },
                });
                if (!isAdmin) {
                    throw new Error("User is not an admin");
                }
                // Check if the user exists and is valid
                const user = yield User_1.User.findByPk(warehouseDetails.userId);
                if (!user) {
                    throw new Error("User not found or invalid");
                }
                const createdWarehouse = yield Warehouse_1.default.create(Object.assign({}, warehouseDetails));
                return createdWarehouse;
            }
            catch (err) {
                throw new Error(err.message || "Error creating warehouse");
            }
        });
    }
    getWarehouses(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the user is an admin
                const isAdmin = yield User_1.User.findOne({
                    where: { id: userId, role: 'ADMIN' },
                });
                if (!isAdmin) {
                    throw new Error("User is not an admin");
                }
                const warehouses = yield Warehouse_1.default.findAll();
                return warehouses;
            }
            catch (err) {
                throw new Error(err.message || "Error getting warehouses");
            }
        });
    }
    getWarehouseById(id, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the user is an admin
                const isAdmin = yield User_1.User.findOne({
                    where: { id: userId, role: 'ADMIN' },
                });
                if (!isAdmin) {
                    throw new Error("User is not an admin");
                }
                const warehouse = yield Warehouse_1.default.findOne({
                    where: { id },
                });
                if (!warehouse) {
                    throw new Error("Warehouse not found");
                }
                return warehouse;
            }
            catch (err) {
                throw new Error(err.message || "Error getting warehouse");
            }
        });
    }
    updateWarehouse(id, updatedDetails, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the user is an admin
                const isAdmin = yield User_1.User.findOne({
                    where: { id: userId, role: 'ADMIN' },
                });
                if (!isAdmin) {
                    throw new Error("User is not an admin");
                }
                const warehouse = yield Warehouse_1.default.findOne({
                    where: { id },
                });
                if (!warehouse) {
                    throw new Error("Warehouse not found");
                }
                // Update warehouse details
                yield warehouse.update(updatedDetails);
                return warehouse;
            }
            catch (err) {
                throw new Error(err.message || "Error updating warehouse");
            }
        });
    }
    deleteWarehouse(id, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the user is an admin
                const isAdmin = yield User_1.User.findOne({
                    where: { id: userId, role: 'ADMIN' },
                });
                if (!isAdmin) {
                    throw new Error("User is not an admin");
                }
                const warehouse = yield Warehouse_1.default.findOne({
                    where: { id },
                });
                if (!warehouse) {
                    throw new Error("Warehouse not found");
                }
                // Delete the warehouse
                yield warehouse.destroy();
            }
            catch (err) {
                throw new Error(err.message || "Error deleting warehouse");
            }
        });
    }
}
exports.default = new ManagementService;
