import { Request, Response, NextFunction } from 'express';
import  StepperUpdate from './../../services/clientService/stepper'

class StepperController{
    async updateStepper(req: Request, res: Response, next: NextFunction){
        try {
            const stepperId = req.params.id;

            const update = await StepperUpdate.stepper(stepperId, req.body);
            return res.status(200).json(update);
        } catch (err : any) {
            next(err);
        }
    }
    
    async UserStepper(req: Request, res: Response, next: NextFunction){
        try {
            const stepperId = req.params.id;

            const update = await StepperUpdate.findUsersStepper(stepperId);
            return res.status(200).json(update);
        } catch (err : any) {
            next(err);
        }
    }
   
    async getUserStepper(req: Request, res: Response, next: NextFunction){
        try {
            const stepperId = req.params.id;

            const getUserStepper = await StepperUpdate.findUsersStepper(stepperId);
            return res.status(200).json(getUserStepper);
        } catch (err : any) {
            next(err);
        }
    }
}
export default new StepperController();