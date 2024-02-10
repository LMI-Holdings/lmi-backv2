import { Request, Response, NextFunction } from 'express';
import OverseasLogisticsService from '../../services/clientService/overseas';
import { FreightDetails } from '../../dtos/ClientServices';

class OverseasLogistics {
    
    /*
    So we have Incoming Overseas Shipment and Outgoing Overseas Shipment.
    Also, the incoming overseas are Shipment from Overseas countryy or from port... 
    */

    async createOverseas(req: Request, res: Response, next: NextFunction) {
        try {
          const createdFreight = await OverseasLogisticsService.createOverseasLogistics(req.body);
          return res.status(201).json(createdFreight);
        } catch (err) {
          next(err);
        }
      }

  async getOverseas(req: Request, res: Response, next: NextFunction) {
    try {
      const overseas = await OverseasLogisticsService.getAllOverseasLogistics();
      return res.status(200).json(overseas);
    } catch (err) {
      next(err);
    }
  }

  async getOverseasByiD(req: Request, res: Response, next: NextFunction) {
    try {
      const overseasId = req.params.id;
    //   const token = req.headers['authorization'] as string;
      const overseas = await OverseasLogisticsService.getOverseasLogisticsById(overseasId);
      if (!overseas) {
        return res.status(404).json({ error: 'Overseas not found' });
      }
      return res.status(200).json(overseas);
    } catch (err) {
      next(err);
    }
  }

  async updateOverseas(req: Request, res: Response, next: NextFunction) {
    try {
      const overseasId = req.params.id;
    //   const token = req.headers['authorization'] as string;
      const updatedFreight = await OverseasLogisticsService.updateOverseasLogistics(overseasId, req.body);
      return res.status(200).json(updatedFreight);
    } catch (err) {
      next(err);
    }
  }

  async deleteOverseas(req: Request, res: Response, next: NextFunction) {
    try {
      const overseasId = req.params.id;
      await OverseasLogisticsService.deleteOverseasLogistics(overseasId);
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

export default new OverseasLogistics();





