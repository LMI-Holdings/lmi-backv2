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
const Freight_1 = require("../../models/Freight");
const EmailService_1 = __importDefault(require("../EmailService"));
class FreightService {
    createFreight(freightDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // User is authenticated, proceed to create the freight
                const createdFreight = yield Freight_1.Freight.create(Object.assign({}, freightDetails // Assign the authenticated user as the owner of the freight
                ));
                yield EmailService_1.default.sendNewFreightCreated(createdFreight.userId, createdFreight.id);
                return createdFreight;
            }
            catch (err) {
                throw new Error(err.message || "Error creating freight");
            }
        });
    }
    getFreightById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const freight = yield Freight_1.Freight.findByPk(id);
                if (!freight) {
                    throw new Error("Freight not found");
                }
                return freight;
            }
            catch (err) {
                throw new Error(err.message || "Error fetching freight");
            }
        });
    }
    getAllFreight() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // User is authenticated, proceed to fetch all freight
                const allFreight = yield Freight_1.Freight.findAll();
                return allFreight;
            }
            catch (err) {
                throw new Error(err.message || "Error fetching freight");
            }
        });
    }
    updateFreight(id, updatedDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // User is authenticated, proceed to update the freight
                const updatedFreight = yield Freight_1.Freight.update(updatedDetails, {
                    where: { id },
                });
                if (updatedFreight[0] === 0) {
                    throw new Error("Freight not found");
                }
                return { message: "Freight updated successfully" };
            }
            catch (err) {
                throw new Error(err.message || "Error updating freight");
            }
        });
    }
    deleteFreight(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // User is authenticated, proceed to delete the freight
                const deletedFreight = yield Freight_1.Freight.destroy({ where: { id } });
                if (deletedFreight === 0) {
                    throw new Error("Freight not found");
                }
                return { message: "Freight deleted successfully" };
            }
            catch (err) {
                throw new Error(err.message || "Error deleting freight");
            }
        });
    }
}
exports.default = new FreightService();
