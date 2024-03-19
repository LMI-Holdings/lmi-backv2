import { OverseasLogisticsDetails } from "../../dtos/ClientServices";
import { OverseasLogistics } from "../../models/OverseasLogistics";
import { Stepper } from "../../models/Stepper";
import EmailService from "../EmailService";

// var created : OverseasLogistics;

class OverseasLogisticsService {
  async createOverseasLogistics(logisticsDetails: OverseasLogisticsDetails): Promise<OverseasLogistics> {
    try {
      // User is authenticated, proceed to create overseas logistics
      console.log([logisticsDetails])
      const createdLogistics = await OverseasLogistics.create({
        ...logisticsDetails
      });

      const stepper = await Stepper.create({
        userId: createdLogistics.userId,
        overseasId: createdLogistics.id,
        service: "Overseas",
        request_started: "upcoming",
        requet_completed: "upcoming",
        request_approved: "upcoming",
        request_confirmed: "upcoming",
        payment_made: "upcoming",
        transport: "upcoming",
        delivered: "upcoming",
        warehouse_status: "upcoming",
        clearance_complete: "upcoming",
        overseas_arrived: "upcoming",
      });
      
      // created = createdLogistics;
      this.email(createdLogistics);
      return createdLogistics;
    } catch (err: any) {
      throw new Error(err.message || "Error creating overseas logistics");
    }
  }
  
  async email(created : any) {
    await EmailService.sendNewOverseasLogisticsCreated(created?.userId, created?.id);
  }

  async getOverseasLogisticsById(id: string) {
    try {
      const logistics = await OverseasLogistics.findByPk(id);

      if (!logistics) {
        throw new Error("Overseas logistics not found");
      }

      return logistics;
    } catch (err: any) {
      throw new Error(err.message || "Error fetching overseas logistics");
    }
  }

  async getAllOverseasLogistics() {
    try {
      // User is authenticated, proceed to fetch all overseas logistics
      const allLogistics = await OverseasLogistics.findAll();

      return allLogistics;
    } catch (err: any) {
      throw new Error(err.message || "Error fetching overseas logistics");
    }
  }
  
  async getAllUserOverseasLogistics(id :  string) {
    try {
      // User is authenticated, proceed to fetch all overseas logistics
      const allLogistics = await OverseasLogistics.findAll({where : {userId : id}});

      return allLogistics;
    } catch (err: any) {
      throw new Error(err.message || "Error fetching overseas logistics");
    }
  }

  async updateOverseasLogistics(id: string, updatedDetails: OverseasLogisticsDetails) {
    try {
      // User is authenticated, proceed to update overseas logistics
      const updatedLogistics = await OverseasLogistics.update(updatedDetails, {
        where: { id },
      });

      if (updatedLogistics[0] === 0) {
        throw new Error("Overseas logistics not found");
      }

      return { message: "Overseas logistics updated successfully" };
    } catch (err: any) {
      throw new Error(err.message || "Error updating overseas logistics");
    }
  }

  async deleteOverseasLogistics(id: string) {
    try {
      // User is authenticated, proceed to delete overseas logistics
      const deletedLogistics = await OverseasLogistics.destroy({ where: { id } });

      if (deletedLogistics === 0) {
        throw new Error("Overseas logistics not found");
      }

      return { message: "Overseas logistics deleted successfully" };
    } catch (err: any) {
      throw new Error(err.message || "Error deleting overseas logistics");
    }
  }
}

export default new OverseasLogisticsService();