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
const storage_1 = __importDefault(require("../../services/clientService/storage"));
class StorageController {
    createStorage(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdStorage = yield storage_1.default.createStorage(req.body);
                return res.status(201).json(createdStorage);
            }
            catch (err) {
                next(err);
            }
        });
    }
    getStorage(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const storage = yield storage_1.default.getAllStorage();
                return res.status(200).json(storage);
            }
            catch (err) {
                next(err);
            }
        });
    }
    getStorageById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const storageId = req.params.id;
                const storage = yield storage_1.default.getStorageById(storageId);
                if (!storage) {
                    return res.status(404).json({ error: 'Storage not found' });
                }
                return res.status(200).json(storage);
            }
            catch (err) {
                next(err);
            }
        });
    }
    updateStorage(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const storageId = req.params.id;
                const updatedStorage = yield storage_1.default.updateStorage(storageId, req.body);
                return res.status(200).json(updatedStorage);
            }
            catch (err) {
                next(err);
            }
        });
    }
    deleteStorage(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const storageId = req.params.id;
                yield storage_1.default.deleteStorage(storageId);
                return res.status(204).send();
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = new StorageController();
