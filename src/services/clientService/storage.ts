import { StorageDetails } from '../../dtos/ClientServices';
import { Storage }  from '../../models/Storage';
import EmailService from '../EmailService';

class StorageService {
  async createStorage(storageDetails: StorageDetails): Promise<Storage> {
    try {
      const createdStorage = await Storage.create({
        ...storageDetails
      });

      this.email(createdStorage);
      return createdStorage;
    } catch (err: any) {
      throw new Error(err.message || "Error creating storage");
    }
  }

  async email(created : any) {
    await EmailService.sendNewStorageCreated(created?.userId, created?.id);
  }

  async getStorageById(id: string): Promise<Storage | null> {
    try {
      const storage = await Storage.findByPk(id);
      return storage;
    } catch (err: any) {
      throw new Error(err.message || "Error fetching storage");
    }
  }

  async getAllStorage(): Promise<Storage[]> {
    try {
      const allStorage = await Storage.findAll();
      return allStorage;
    } catch (err: any) {
      throw new Error(err.message || "Error fetching storage");
    }
  }

  async updateStorage(id: string, updatedDetails: StorageDetails): Promise<void> {
    try {
      const updatedStorage = await Storage.update(updatedDetails, {
        where: { id },
      });

      if (updatedStorage[0] === 0) {
        throw new Error("Storage not found");
      }
    } catch (err: any) {
      throw new Error(err.message || "Error updating storage");
    }
  }

  async deleteStorage(id: string): Promise<void> {
    try {
      const deletedStorage = await Storage.destroy({ where: { id } });

      if (deletedStorage === 0) {
        throw new Error("Storage not found");
      }
    } catch (err: any) {
      throw new Error(err.message || "Error deleting storage");
    }
  }
}

export default new StorageService();
