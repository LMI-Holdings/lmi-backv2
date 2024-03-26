import nodemailer from "nodemailer";
import { User } from "../models/User";
import { response } from "express";

class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      port: Number(process.env.MAIL_PORT),
      host: String(process.env.MAIL_SERVICE),
      secure: false,
      auth: {
        user: "dicksonanyaele1234@gmail.com",
        pass: "cnbvwzaieslewcos",
      },
    });
  }

  async sendOtpEmail(email: string, otp: string): Promise<void> {
    try {
      const mailOptions = {
        from: String(process.env.MAIL_USER),
        to: email,
        subject: "LMI Services (OTP Verification)",
        text: `Your OTP for verification is: ${otp}`,
      };

      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      throw new Error(`Failed to send OTP email.${error}`);
    }
  }

  async sendNewFreightCreated(
    userId: string,
    freightId: string
  ): Promise<void> {
    const id = userId;

    const userDetails = await User.findByPk(id);

    try {
      const mailOptionsToClient = {
        from: String(process.env.MAIL_USER),
        to: userDetails?.email,
        subject: "Your Freight has been Succefully Created.",
        text: `Hi ${userDetails?.first_name}, 
        \n Freight Request ${freightId} was successful, 
        \n Thank you for your new request, you would receive a call shortly concerning your request. 
        \n Your Faithfully, \n LMI Holdings`,
      };
      const mailOptionsToAdmin = {
        from: String(process.env.MAIL_USER),
        to: "panditmckenzie@gmail.com",
        subject: "A Freight has been Successfully Created.",
        text: `Freight ${freightId} requested by ${userDetails?.first_name},
         contact them through either ${userDetails?.phone_number} or ${userDetails?.email} 
         to confirm and proceed with request. \n Thank you.`,
      };

      await this.transporter.sendMail(mailOptionsToClient);
      await this.transporter.sendMail(mailOptionsToAdmin);
    } catch (error) {
      response.json({
        error: error,
      });
      throw error;
    }
  }


  // Email Service for Overseas Logistics Service
  async sendNewOverseasLogisticsCreated(
    userId: string,
    overseasId: string
  ): Promise<void> {
    const id = userId;

    const userDetails = await User.findByPk(id);

    try {

      // Email to client
      const mailOptionsToClient = {
        from: String(process.env.MAIL_USER),
        to: userDetails?.email,
        subject: "Your Overseas Logistic has been Successfully Created.",
        text: `Hi ${userDetails?.first_name}, 
        \n Overseas Logistics Request ${overseasId} was successful, 
        \n Thank you for your new request, you would receive a call shortly concerning your request. 
        \n Your Faithfully, \n LMI Holdings`,
      };

      // Email to Admin
      const mailOptionsToAdmin = {
        from: String(process.env.MAIL_USER),
        to: "panditmckenzie@gmail.com",
        subject: "An Overseas Shipment has been Succefully Created.",
        text: `Overseas ${overseasId} requested by ${userDetails?.first_name},
         contact them through either ${userDetails?.phone_number} or ${userDetails?.email} 
         to confirm and proceed with request. \n Thank you.`,
      };

      await this.transporter.sendMail(mailOptionsToClient);
      // await this.transporter.sendMail(mailOptionsToAdmin);
    } catch (error) {
      response.json({
        error: error,
      });
      throw error;
    }
  }
  // Email Service for Overseas Logistics Service
  async sendNewStorageCreated(
    userId: string,
    storageId: string
  ): Promise<void> {
    const id = userId;

    const userDetails = await User.findByPk(id);

    try {

      // Email to client
      const mailOptionsToClient = {
        from: String(process.env.MAIL_USER),
        to: userDetails?.email,
        subject: "Your Request for Storage has been Successfully Created.",
        text: `Hi ${userDetails?.first_name}, 
        \n Storage Request ${storageId} was successful, 
        \n Thank you for your new request, you would receive a call shortly concerning your request. 
        \n Your Faithfully, \n LMI Holdings`,
      };

      // Email to Admin
      // const mailOptionsToAdmin = {
      //   from: String(process.env.MAIL_USER),
      //   to: "panditmckenzie@gmail.com",
      //   subject: "An Storage Request has been Succefully Created.",
      //   text: `Storage ${storageId} requested by ${userDetails?.first_name},
      //    contact them through either ${userDetails?.phone_number} or ${userDetails?.email} 
      //    to confirm and proceed with request. \n Thank you.`,
      // };

      await this.transporter.sendMail(mailOptionsToClient);
      // await this.transporter.sendMail(mailOptionsToAdmin);
    } catch (error) {
      response.json({
        error: error,
      });
      throw error;
    }
  }
}

export default new EmailService();
