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
const OverseasLogistics_1 = require("../../models/OverseasLogistics");
const EmailService_1 = __importDefault(require("../EmailService"));
// var created : OverseasLogistics;
class OverseasLogisticsService {
    createOverseasLogistics(logisticsDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // User is authenticated, proceed to create overseas logistics
                console.log([logisticsDetails]);
                const createdLogistics = yield OverseasLogistics_1.OverseasLogistics.create(Object.assign({}, logisticsDetails));
                // created = createdLogistics;
                console.log(createdLogistics, createdLogistics.shipmentId, createdLogistics.id);
                this.email(createdLogistics);
                return createdLogistics;
            }
            catch (err) {
                throw new Error(err.message || "Error creating overseas logistics");
            }
        });
    }
    email(created) {
        return __awaiter(this, void 0, void 0, function* () {
            yield EmailService_1.default.sendNewOverseasLogisticsCreated(created === null || created === void 0 ? void 0 : created.userId, created === null || created === void 0 ? void 0 : created.id);
        });
    }
    getOverseasLogisticsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const logistics = yield OverseasLogistics_1.OverseasLogistics.findByPk(id);
                if (!logistics) {
                    throw new Error("Overseas logistics not found");
                }
                return logistics;
            }
            catch (err) {
                throw new Error(err.message || "Error fetching overseas logistics");
            }
        });
    }
    getAllOverseasLogistics() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // User is authenticated, proceed to fetch all overseas logistics
                const allLogistics = yield OverseasLogistics_1.OverseasLogistics.findAll();
                return allLogistics;
            }
            catch (err) {
                throw new Error(err.message || "Error fetching overseas logistics");
            }
        });
    }
    updateOverseasLogistics(id, updatedDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // User is authenticated, proceed to update overseas logistics
                const updatedLogistics = yield OverseasLogistics_1.OverseasLogistics.update(updatedDetails, {
                    where: { id },
                });
                if (updatedLogistics[0] === 0) {
                    throw new Error("Overseas logistics not found");
                }
                return { message: "Overseas logistics updated successfully" };
            }
            catch (err) {
                throw new Error(err.message || "Error updating overseas logistics");
            }
        });
    }
    deleteOverseasLogistics(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // User is authenticated, proceed to delete overseas logistics
                const deletedLogistics = yield OverseasLogistics_1.OverseasLogistics.destroy({ where: { id } });
                if (deletedLogistics === 0) {
                    throw new Error("Overseas logistics not found");
                }
                return { message: "Overseas logistics deleted successfully" };
            }
            catch (err) {
                throw new Error(err.message || "Error deleting overseas logistics");
            }
        });
    }
}
exports.default = new OverseasLogisticsService();
