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
const overseas_1 = __importDefault(require("../../services/clientService/overseas"));
class OverseasLogistics {
    /*
    So we have Incoming Overseas Shipment and Outgoing Overseas Shipment.
    Also, the incoming overseas are Shipment from Overseas countryy or from port...
    */
    createOverseas(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdFreight = yield overseas_1.default.createOverseasLogistics(req.body);
                return res.status(201).json(createdFreight);
            }
            catch (err) {
                next(err);
            }
        });
    }
    getOverseas(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const overseas = yield overseas_1.default.getAllOverseasLogistics();
                return res.status(200).json(overseas);
            }
            catch (err) {
                next(err);
            }
        });
    }
    getOverseasByiD(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const overseasId = req.params.id;
                //   const token = req.headers['authorization'] as string;
                const overseas = yield overseas_1.default.getOverseasLogisticsById(overseasId);
                if (!overseas) {
                    return res.status(404).json({ error: 'Overseas not found' });
                }
                return res.status(200).json(overseas);
            }
            catch (err) {
                next(err);
            }
        });
    }
    updateOverseas(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const overseasId = req.params.id;
                //   const token = req.headers['authorization'] as string;
                const updatedFreight = yield overseas_1.default.updateOverseasLogistics(overseasId, req.body);
                return res.status(200).json(updatedFreight);
            }
            catch (err) {
                next(err);
            }
        });
    }
    deleteOverseas(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const overseasId = req.params.id;
                yield overseas_1.default.deleteOverseasLogistics(overseasId);
                return res.status(204).send();
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = new OverseasLogistics();
