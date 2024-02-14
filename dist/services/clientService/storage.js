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
const Storage_1 = require("../../models/Storage");
const EmailService_1 = __importDefault(require("../EmailService"));
class StorageService {
    createStorage(storageDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdStorage = yield Storage_1.Storage.create(Object.assign({}, storageDetails));
                this.email(createdStorage);
                return createdStorage;
            }
            catch (err) {
                throw new Error(err.message || "Error creating storage");
            }
        });
    }
    email(created) {
        return __awaiter(this, void 0, void 0, function* () {
            yield EmailService_1.default.sendNewStorageCreated(created === null || created === void 0 ? void 0 : created.userId, created === null || created === void 0 ? void 0 : created.id);
        });
    }
    getStorageById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const storage = yield Storage_1.Storage.findByPk(id);
                return storage;
            }
            catch (err) {
                throw new Error(err.message || "Error fetching storage");
            }
        });
    }
    getAllStorage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allStorage = yield Storage_1.Storage.findAll();
                return allStorage;
            }
            catch (err) {
                throw new Error(err.message || "Error fetching storage");
            }
        });
    }
    updateStorage(id, updatedDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedStorage = yield Storage_1.Storage.update(updatedDetails, {
                    where: { id },
                });
                if (updatedStorage[0] === 0) {
                    throw new Error("Storage not found");
                }
            }
            catch (err) {
                throw new Error(err.message || "Error updating storage");
            }
        });
    }
    deleteStorage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedStorage = yield Storage_1.Storage.destroy({ where: { id } });
                if (deletedStorage === 0) {
                    throw new Error("Storage not found");
                }
            }
            catch (err) {
                throw new Error(err.message || "Error deleting storage");
            }
        });
    }
}
exports.default = new StorageService();
