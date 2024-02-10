import { Request, Response, NextFunction } from "express";
import ManagementService from "../services/management/managementService";


class ManagementController{

    async addTruck(req: Request, res: Response, next: NextFunction) {
        try {
            const addedTruck = await ManagementService.addTrucks(req.body);
            return res.status(201).json(addedTruck);
        } catch (err) {
            next(err);
        }
    }

    async getTruckById(req: Request, res: Response, next: NextFunction) {
        try {
            const trucks = await ManagementService.getTruckById(req.params.id, req.body.userId);
            return res.status(200).json(trucks);
        } catch (err) {
            next(err);
        }
    }

    async getTrucks(req: Request, res: Response, next: NextFunction) {
        try {
            const trucks = await ManagementService.getAllTrucks();
            return res.status(200).json(trucks);
        } catch (err) {
            next(err);
        }
    }

    async updateTruck(req: Request, res: Response, next: NextFunction) {
        try {
            const updatedTruck = await ManagementService.updateTruck(req.params.id, req.body, req.body.userId);
            return res.status(200).json(updatedTruck);
        } catch (err) {
            next(err);
        }
    }

    async deleteTruck(req: Request, res: Response, next: NextFunction) {
        try {
            await ManagementService.deleteTruck(req.params.id, req.body.userId);
            return res.status(204).send();
        } catch (err) {
            next(err);
        }
    }

    // For Drivers
    async addDriver(req: Request, res: Response, next: NextFunction) {
        try {
            const addedTruck = await ManagementService.addDriver(req.body);
            return res.status(201).json(addedTruck);
        } catch (err) {
            next(err);
        }
    }

    async getDriverById(req: Request, res: Response, next: NextFunction) {
        try {
            const trucks = await ManagementService.getDriverById(req.params.id, req.body.userId);
            return res.status(200).json(trucks);
        } catch (err) {
            next(err);
        }
    }

    async getDrivers(req: Request, res: Response, next: NextFunction) {
        try {
            const trucks = await ManagementService.getAllDrivers(req.body.id);
            return res.status(200).json(trucks);
        } catch (err) {
            next(err);
        }
    }

    async updateDriver(req: Request, res: Response, next: NextFunction) {
        try {
            const updatedTruck = await ManagementService.updateDriver(req.params.id, req.body, req.body.userId);
            return res.status(200).json(updatedTruck);
        } catch (err) {
            next(err);
        }
    }

    async deleteDriver(req: Request, res: Response, next: NextFunction) {
        try {
            await ManagementService.deleteDriver(req.params.id, req.body.userId);
            return res.status(204).send();
        } catch (err) {
            next(err);
        }
    }



    // Warehouse

    async createWarehouse(req: Request, res: Response, next: NextFunction) {
        try {
          const createdWarehouse = await ManagementService.createWarehouse(req.body, req.body.userId);
          return res.status(201).json(createdWarehouse);
        } catch (err) {
          next(err);
        }
      }

      async getAllWarehouses(req: Request, res: Response, next: NextFunction) {
        try {
          const warehouses = await ManagementService.getWarehouses(req.body.userId);
          return res.status(200).json(warehouses);
        } catch (err) {
          next(err);
        }
      }
    
      async getWarehouseById(req: Request, res: Response, next: NextFunction) {
        try {
          const warehouseId = req.params.id;
          const warehouse = await ManagementService.getWarehouseById(warehouseId, req.params.id);
          return res.status(200).json(warehouse);
        } catch (err) {
          next(err);
        }
      }
    
      async updateWarehouse(req: Request, res: Response, next: NextFunction) {
        try {
          const warehouseId = req.params.id;
          await ManagementService.updateWarehouse(warehouseId, req.body, req.params.id);
          return res.status(200).send();
        } catch (err) {
          next(err);
        }
      }
    
      async deleteWarehouse(req: Request, res: Response, next: NextFunction) {
        try {
          const warehouseId = req.params.id;
          await ManagementService.deleteWarehouse(warehouseId, req.params.id);
          return res.status(204).send();
        } catch (err) {
          next(err);
        }
      }
}
export default new ManagementController;

