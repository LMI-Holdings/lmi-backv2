import { StepperAttributes } from "../../dtos/ClientServices";
import { Stepper } from "../../models/Stepper";

class StepperUpdate{
    async stepper(id: string, stepperDetails : StepperAttributes){
        try {
            const updateStepper = await Stepper.update(stepperDetails, {where: {id}});
            return updateStepper;

        } catch (err: any) {
            throw new Error(err.message || "Error fetching overseas logistics");
        }
    }

    async findUsersStepper(id : string){
        try {
            const usersStepper = await Stepper.findAll({where: {userId : id}});
            return usersStepper;
        } catch (error:any) {
            throw new Error(error.message || "Error find the user's stepper");
        }
    }
}

export default new StepperUpdate();