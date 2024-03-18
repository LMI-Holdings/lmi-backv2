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
}

export default new StepperUpdate();