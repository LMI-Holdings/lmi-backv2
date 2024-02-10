import { Request, Response, NextFunction } from 'express';
import StorageService from '../../services/clientService/storage';
import { StorageDetails } from '../../dtos/ClientServices';

class StorageController {
  async createStorage(req: Request, res: Response, next: NextFunction) {
    try {
      const createdStorage = await StorageService.createStorage(req.body);
      return res.status(201).json(createdStorage);
    } catch (err) {
      next(err);
    }
  }

  async getStorage(req: Request, res: Response, next: NextFunction) {
    try {
      const storage = await StorageService.getAllStorage();
      return res.status(200).json(storage);
    } catch (err) {
      next(err);
    }
  }

  async getStorageById(req: Request, res: Response, next: NextFunction) {
    try {
      const storageId = req.params.id;
      const storage = await StorageService.getStorageById(storageId);
      if (!storage) {
        return res.status(404).json({ error: 'Storage not found' });
      }
      return res.status(200).json(storage);
    } catch (err) {
      next(err);
    }
  }

  async updateStorage(req: Request, res: Response, next: NextFunction) {
    try {
      const storageId = req.params.id;
      const updatedStorage = await StorageService.updateStorage(storageId, req.body);
      return res.status(200).json(updatedStorage);
    } catch (err) {
      next(err);
    }
  }

  async deleteStorage(req: Request, res: Response, next: NextFunction) {
    try {
      const storageId = req.params.id;
      await StorageService.deleteStorage(storageId);
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

export default new StorageController();
