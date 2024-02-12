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
const nodemailer_1 = __importDefault(require("nodemailer"));
const User_1 = require("../models/User");
const express_1 = require("express");
class EmailService {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
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
    sendOtpEmail(email, otp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mailOptions = {
                    from: String(process.env.MAIL_USER),
                    to: email,
                    subject: "LMI Services (OTP Verification)",
                    text: `Your OTP for verification is: ${otp}`,
                };
                yield this.transporter.sendMail(mailOptions);
            }
            catch (error) {
                throw new Error(`Failed to send OTP email.${error}`);
            }
        });
    }
    sendNewFreightCreated(userId, freightId) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = userId;
            const userDetails = yield User_1.User.findByPk(id);
            try {
                const mailOptionsToClient = {
                    from: String(process.env.MAIL_USER),
                    to: userDetails === null || userDetails === void 0 ? void 0 : userDetails.email,
                    subject: "Your Freight has been Succefully Created.",
                    text: `Hi ${userDetails === null || userDetails === void 0 ? void 0 : userDetails.first_name}, 
        \n Freight Request ${freightId} was successful, 
        \n Thank you for your new request, you would receive a call shortly concerning your request. 
        \n Your Faithfully, \n LMI Holdings`,
                };
                const mailOptionsToAdmin = {
                    from: String(process.env.MAIL_USER),
                    to: "panditmckenzie@gmail.com",
                    subject: "A Freight has been Successfully Created.",
                    text: `Freight ${freightId} requested by ${userDetails === null || userDetails === void 0 ? void 0 : userDetails.first_name},
         contact them through either ${userDetails === null || userDetails === void 0 ? void 0 : userDetails.phone_number} or ${userDetails === null || userDetails === void 0 ? void 0 : userDetails.email} 
         to confirm and proceed with request. \n Thank you.`,
                };
                yield this.transporter.sendMail(mailOptionsToClient);
                yield this.transporter.sendMail(mailOptionsToAdmin);
            }
            catch (error) {
                express_1.response.json({
                    error: error,
                });
                throw error;
            }
        });
    }
    // Email Service for Overseas Logistics Service
    sendNewOverseasLogisticsCreated(userId, overseasId) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = userId;
            const userDetails = yield User_1.User.findByPk(id);
            try {
                // Email to client
                const mailOptionsToClient = {
                    from: String(process.env.MAIL_USER),
                    to: userDetails === null || userDetails === void 0 ? void 0 : userDetails.email,
                    subject: "Your Overseas Logistic has been Successfully Created.",
                    text: `Hi ${userDetails === null || userDetails === void 0 ? void 0 : userDetails.first_name}, 
        \n Overseas Logistics Request ${overseasId} was successful, 
        \n Thank you for your new request, you would receive a call shortly concerning your request. 
        \n Your Faithfully, \n LMI Holdings`,
                };
                // Email to Admin
                const mailOptionsToAdmin = {
                    from: String(process.env.MAIL_USER),
                    to: "panditmckenzie@gmail.com",
                    subject: "An Overseas Shipment has been Succefully Created.",
                    text: `Overseas ${overseasId} requested by ${userDetails === null || userDetails === void 0 ? void 0 : userDetails.first_name},
         contact them through either ${userDetails === null || userDetails === void 0 ? void 0 : userDetails.phone_number} or ${userDetails === null || userDetails === void 0 ? void 0 : userDetails.email} 
         to confirm and proceed with request. \n Thank you.`,
                };
                yield this.transporter.sendMail(mailOptionsToClient);
                // await this.transporter.sendMail(mailOptionsToAdmin);
            }
            catch (error) {
                express_1.response.json({
                    error: error,
                });
                throw error;
            }
        });
    }
    // Email Service for Overseas Logistics Service
    sendNewStorageCreated(userId, storageId) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = userId;
            const userDetails = yield User_1.User.findByPk(id);
            try {
                // Email to client
                const mailOptionsToClient = {
                    from: String(process.env.MAIL_USER),
                    to: userDetails === null || userDetails === void 0 ? void 0 : userDetails.email,
                    subject: "Your Storage Request has been Successfully Created.",
                    text: `Hi ${userDetails === null || userDetails === void 0 ? void 0 : userDetails.first_name}, 
        \n Storage Request ${storageId} was successful, 
        \n Thank you for your new request, you would receive a call shortly concerning your request. 
        \n Your Faithfully, \n LMI Holdings`,
                };
                // Email to Admin
                const mailOptionsToAdmin = {
                    from: String(process.env.MAIL_USER),
                    to: "panditmckenzie@gmail.com",
                    subject: "An Storage Request has been Succefully Created.",
                    text: `Storage ${storageId} requested by ${userDetails === null || userDetails === void 0 ? void 0 : userDetails.first_name},
         contact them through either ${userDetails === null || userDetails === void 0 ? void 0 : userDetails.phone_number} or ${userDetails === null || userDetails === void 0 ? void 0 : userDetails.email} 
         to confirm and proceed with request. \n Thank you.`,
                };
                yield this.transporter.sendMail(mailOptionsToClient);
                // await this.transporter.sendMail(mailOptionsToAdmin);
            }
            catch (error) {
                express_1.response.json({
                    error: error,
                });
                throw error;
            }
        });
    }
}
exports.default = new EmailService();
