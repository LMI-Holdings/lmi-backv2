import { FreightDetails } from "../../dtos/ClientServices";
import { Freight } from "../../models/Freight";
import { Stepper } from "../../models/Stepper";
import { User } from "../../models/User";
import { verifyToken } from "../../utils/jwtUtils";
import EmailService from "../EmailService";

class FreightService {

    async createFreight(freightDetails: FreightDetails): Promise<Freight> {
        try {
    
          // User is authenticated, proceed to create the freight
          const createdFreight = await Freight.create({
            ...freightDetails // Assign the authenticated user as the owner of the freight
          });

          const stepper = await Stepper.create({
            userId: createdFreight.userId,
            freightserviceId: createdFreight.id,
            service: "Freight",
            request_started: "upcoming",
            requet_completed: "upcoming",
            request_approved: "upcoming",
            request_confirmed: "upcoming",
            payment_made: "upcoming",
            transport: "upcoming",
            delivered: "upcoming",
            warehouse_status: "upcoming"
          });
    
          await EmailService.sendNewFreightCreated(createdFreight.userId, createdFreight.id)
          return createdFreight;
        } catch (err: any) {
          throw new Error(err.message || "Error creating freight");
        }
      }

    async getFreightById(id: string) {
        try {
            const freight = await Freight.findByPk(id);

            if (!freight) {
                throw new Error("Freight not found");
            }

            return freight;
        } catch (err: any) {
            throw new Error(err.message || "Error fetching freight");
        }
    }

    async getUsersFreightById(id: string) {
        try {
            const freight = await Freight.findAll({where: {userId : id}});

            if (!freight) {
                throw new Error("Freight not found");
            }

            return freight;
        } catch (err: any) {
            throw new Error(err.message || "Error fetching freight");
        }
    }

    async getAllFreight() {
        try {
            // User is authenticated, proceed to fetch all freight
            const allFreight = await Freight.findAll();

            return allFreight;
        } catch (err: any) {
            throw new Error(err.message || "Error fetching freight");
        }
    }

    async updateFreight(id: string, updatedDetails: FreightDetails) {
        try {

            // User is authenticated, proceed to update the freight
            const updatedFreight = await Freight.update(updatedDetails, {
                where: { id },
            });

            if (updatedFreight[0] === 0) {
                throw new Error("Freight not found");
            }

            return { message: "Freight updated successfully" };
        } catch (err: any) {
            throw new Error(err.message || "Error updating freight");
        }
    }

    async deleteFreight(id: string) {
        try {
            // User is authenticated, proceed to delete the freight
            const deletedFreight = await Freight.destroy({ where: { id } });

            if (deletedFreight === 0) {
                throw new Error("Freight not found");
            }

            return { message: "Freight deleted successfully" };
        } catch (err: any) {
            throw new Error(err.message || "Error deleting freight");
        }
    }
}

export default new FreightService();
