import { mapWhereFieldNames } from "sequelize/types/utils";
import { DriverDetails, TruckDetails, WarehouseDetails } from "../../dtos/Management"
import Driver from "../../models/Driver";
import Truck from "../../models/Truck";
import { User } from "../../models/User"
import Warehouse from "../../models/Warehouse";

class ManagementService {


    // For Trucks
    async addTrucks(truck: TruckDetails) {
        try {
            // Check if the user is an admin
            const isAdmin = await User.findOne({
                where: { id: truck.userId, role: 'ADMIN' },
            });

            if (isAdmin) {
                // User is an admin, proceed to create a truck
                const newTruck = await Truck.create({
                    truckRegNumber: truck.truckRegNumber,
                    name: truck.name,
                    volume: truck.volume,
                    // Add any other truck details as needed
                });

                return newTruck;
            } else {
                throw new Error("User is not an admin");
            }
        } catch (err: any) {
            throw new Error(err.message || "Error adding truck");
        }
    }

    async getTruckById(truckId: string, userId: string) {
        try {
            // Check if the user is an admin
            const isAdmin = await User.findOne({
                where: { id: userId, role: 'ADMIN' },
            });

            if (!isAdmin) {
                throw new Error("User is not an admin");
            }

            const truck = await Truck.findOne({
                where: { id: truckId },
            });

            if (!truck) {
                throw new Error("Truck not found");
            }

            return truck;
        } catch (err: any) {
            throw new Error(err.message || "Error getting truck");
        }
    }

    async getAllTrucks() {
        try {
            // Check if the user is an admin
            const Trucks = await Truck.findAll({});

            return Trucks;
        } catch (err: any) {
            throw new Error(err.message || "Error getting truck");
        }
    }

    async updateTruck(truckId: string, updatedDetails: Partial<TruckDetails>, userId: string) {
        try {
            // Check if the user is an admin
            const isAdmin = await User.findOne({
                where: { id: userId, role: 'ADMIN' },
            });

            if (!isAdmin) {
                throw new Error("User is not an admin");
            }

            const truck = await Truck.findOne({
                where: { id: truckId },
            });

            if (!truck) {
                throw new Error("Truck not found");
            }

            // Update truck details
            await truck.update(updatedDetails);

            return truck;
        } catch (err: any) {
            throw new Error(err.message || "Error updating truck");
        }
    }

    async deleteTruck(truckId: string, userId: string) {
        try {
            // Check if the user is an admin
            const isAdmin = await User.findOne({
                where: { id: userId, role: 'ADMIN' },
            });

            if (!isAdmin) {
                throw new Error("User is not an admin");
            }

            const truck = await Truck.findOne({
                where: { id: truckId },
            });

            if (!truck) {
                throw new Error("Truck not found");
            }

            // Delete the truck
            await truck.destroy();

            return { message: "Truck deleted successfully" };
        } catch (err: any) {
            throw new Error(err.message || "Error deleting truck");
        }
    }


   // For CRUD Drivers

async addDriver(driver: DriverDetails) {
    try {
        // Check if the user is an admin
        const isAdmin = await User.findOne({
            where: { id: driver.userId, role: 'ADMIN' },
        });

        if (isAdmin) {
            // User is an admin, proceed to create a driver
            const newDriver = await Driver.create({
                driverId: driver.id,
                name: driver.firstName,
                phoneNumber: driver.phoneNumber,
                // Add any other driver details as needed
            });

            return newDriver;
        } else {
            throw new Error("User is not an admin");
        }
    } catch (err: any) {
        throw new Error(err.message || "Error adding driver");
    }
}

async getDriverById(driverId: string, userId: string) {
    try {
        // Check if the user is an admin
        const isAdmin = await User.findOne({
            where: { id: userId, role: 'ADMIN' },
        });

        if (!isAdmin) {
            throw new Error("User is not an admin");
        }

        const driver = await Driver.findOne({
            where: { id: driverId },
        });

        if (!driver) {
            throw new Error("Driver not found");
        }

        return driver;
    } catch (err: any) {
        throw new Error(err.message || "Error getting driver");
    }
}

async getAllDrivers(userId: string) {
    try {
        // Check if the user is an admin
        const isAdmin = await User.findOne({
            where: { id: userId, role: 'ADMIN' },
        });

        if (!isAdmin) {
            throw new Error("User is not an admin");
        }

        const drivers = await Driver.findAll();

        return drivers;
    } catch (err: any) {
        throw new Error(err.message || "Error getting drivers");
    }
}

async updateDriver(driverId: string, updatedDetails: Partial<DriverDetails>, userId: string) {
    try {
        // Check if the user is an admin
        const isAdmin = await User.findOne({
            where: { id: userId, role: 'ADMIN' },
        });

        if (!isAdmin) {
            throw new Error("User is not an admin");
        }

        const driver = await Driver.findOne({
            where: { id: driverId },
        });

        if (!driver) {
            throw new Error("Driver not found");
        }

        // Update driver details
        await driver.update(updatedDetails);

        return driver;
    } catch (err: any) {
        throw new Error(err.message || "Error updating driver");
    }
}

async deleteDriver(driverId: string, userId: string) {
    try {
        // Check if the user is an admin
        const isAdmin = await User.findOne({
            where: { id: userId, role: 'ADMIN' },
        });

        if (!isAdmin) {
            throw new Error("User is not an admin");
        }

        const driver = await Driver.findOne({
            where: { id: driverId },
        });

        if (!driver) {
            throw new Error("Driver not found");
        }

        // Delete the driver
        await driver.destroy();

        return { message: "Driver deleted successfully" };
    } catch (err: any) {
        throw new Error(err.message || "Error deleting driver");
    }
}

// Warehouse operations

async createWarehouse(warehouseDetails: WarehouseDetails, userId: string) {
    try {
        // Check if the user is an admin
        const isAdmin = await User.findOne({
            where: { id: userId, role: 'ADMIN' },
        });

        if (!isAdmin) {
            throw new Error("User is not an admin");
        }

        // Check if the user exists and is valid
        const user = await User.findByPk(warehouseDetails.userId);
        if (!user) {
            throw new Error("User not found or invalid");
        }

        const createdWarehouse = await Warehouse.create({
            ...warehouseDetails,
        });

        return createdWarehouse;
    } catch (err: any) {
        throw new Error(err.message || "Error creating warehouse");
    }
}

async getWarehouses(userId: string): Promise<WarehouseDetails[]> {
    try {
        // Check if the user is an admin
        const isAdmin = await User.findOne({
            where: { id: userId, role: 'ADMIN' },
        });

        if (!isAdmin) {
            throw new Error("User is not an admin");
        }

        const warehouses = await Warehouse.findAll();

        return warehouses;
    } catch (err: any) {
        throw new Error(err.message || "Error getting warehouses");
    }
}

async getWarehouseById(id: string, userId: string) {
    try {
        // Check if the user is an admin
        const isAdmin = await User.findOne({
            where: { id: userId, role: 'ADMIN' },
        });

        if (!isAdmin) {
            throw new Error("User is not an admin");
        }

        const warehouse = await Warehouse.findOne({
            where: { id },
        });

        if (!warehouse) {
            throw new Error("Warehouse not found");
        }

        return warehouse;
    } catch (err: any) {
        throw new Error(err.message || "Error getting warehouse");
    }
}

async updateWarehouse(id: string, updatedDetails: Partial<WarehouseDetails>, userId: string) {
    try {
        // Check if the user is an admin
        const isAdmin = await User.findOne({
            where: { id: userId, role: 'ADMIN' },
        });

        if (!isAdmin) {
            throw new Error("User is not an admin");
        }

        const warehouse = await Warehouse.findOne({
            where: { id },
        });

        if (!warehouse) {
            throw new Error("Warehouse not found");
        }

        // Update warehouse details
        await warehouse.update(updatedDetails);

        return warehouse;
    } catch (err: any) {
        throw new Error(err.message || "Error updating warehouse");
    }
}

async deleteWarehouse(id: string, userId: string): Promise<void> {
    try {
        // Check if the user is an admin
        const isAdmin = await User.findOne({
            where: { id: userId, role: 'ADMIN' },
        });

        if (!isAdmin) {
            throw new Error("User is not an admin");
        }

        const warehouse = await Warehouse.findOne({
            where: { id },
        });

        if (!warehouse) {
            throw new Error("Warehouse not found");
        }

        // Delete the warehouse
        await warehouse.destroy();
    } catch (err: any) {
        throw new Error(err.message || "Error deleting warehouse");
    }
}

}

export default new ManagementService;
