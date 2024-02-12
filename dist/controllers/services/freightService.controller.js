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
const freight_1 = __importDefault(require("../../services/clientService/freight"));
class FreightController {
    /*
    #swagger.tags = ['Freight']
    #swagger.description = 'Endpoint to create a new freight'
    #swagger.parameters['newFreight'] = {
        in: 'body',
        description: 'Information for the new freight.',
        required: true,
        type: 'object'
    }
    */
    createFreight(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdFreight = yield freight_1.default.createFreight(req.body);
                return res.status(201).json(createdFreight);
            }
            catch (err) {
                next(err);
            }
        });
    }
    /*
    #swagger.tags = ['Freight']
    #swagger.description = 'Endpoint to get all freights'
    */
    getFreights(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const freights = yield freight_1.default.getAllFreight();
                return res.status(200).json(freights);
            }
            catch (err) {
                next(err);
            }
        });
    }
    /*
    #swagger.tags = ['Freight']
    #swagger.description = 'Endpoint to get a freight by ID'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID of the freight to retrieve.',
        required: true,
        type: 'integer'
    }
    */
    getFreightById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const freightId = req.params.id;
                const freight = yield freight_1.default.getFreightById(freightId);
                if (!freight) {
                    return res.status(404).json({ error: 'Freight not found' });
                }
                return res.status(200).json(freight);
            }
            catch (err) {
                next(err);
            }
        });
    }
    /*
    #swagger.tags = ['Freight']
    #swagger.description = 'Endpoint to update a freight'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID of the freight to update.',
        required: true,
        type: 'integer'
    }
    #swagger.parameters['freight'] = {
        in: 'body',
        description: 'Information to update the freight.',
        required: true,
        type: 'object'
    }
    */
    updateFreight(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const freightId = req.params.id;
                const updatedFreight = yield freight_1.default.updateFreight(freightId, req.body);
                return res.status(200).json(updatedFreight);
            }
            catch (err) {
                next(err);
            }
        });
    }
    deleteFreight(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const freightId = req.params.id;
                yield freight_1.default.deleteFreight(freightId);
                return res.status(204).send();
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = new FreightController();
