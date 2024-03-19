import { Request, Response, NextFunction } from 'express';
import FreightService from '../../services/clientService/freight';
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
    async createFreight(req: Request, res: Response, next: NextFunction) {
        try {
          const createdFreight = await FreightService.createFreight(req.body);
          return res.status(201).json(createdFreight);
        } catch (err) {
          next(err);
        }
    }
    /*
    #swagger.tags = ['Freight']
    #swagger.description = 'Endpoint to get all freights'
    */
    async getFreights(req: Request, res: Response, next: NextFunction) {
        try {
          const freights = await FreightService.getAllFreight();
          return res.status(200).json(freights);
        } catch (err) {
          next(err);
        }
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
    async getFreightById(req: Request, res: Response, next: NextFunction) {
        try {
          const freightId = req.params.id;
          const freight = await FreightService.getFreightById(freightId);
          if (!freight) {
            return res.status(404).json({ error: 'Freight not found' });
          }
          return res.status(200).json(freight);
        } catch (err) {
          next(err);
        }
    }
   
    async getUserFreightById(req: Request, res: Response, next: NextFunction) {
        try {
          const freightId = req.params.id;
          const freight = await FreightService.getUsersFreightById(freightId);
          if (!freight) {
            return res.status(404).json({ error: 'Freight not found' });
          }
          return res.status(200).json(freight);
        } catch (err) {
          next(err);
        }
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
    async updateFreight(req: Request, res: Response, next: NextFunction) {
        try {
          const freightId = req.params.id;
          const updatedFreight = await FreightService.updateFreight(freightId, req.body);
          return res.status(200).json(updatedFreight);
        } catch (err) {
          next(err);
        }
    }
   
    async deleteFreight(req: Request, res: Response, next: NextFunction) {
        try {
          const freightId = req.params.id;
          await FreightService.deleteFreight(freightId);
          return res.status(204).send();
        } catch (err) {
          next(err);
        }
    }
}
export default new FreightController();