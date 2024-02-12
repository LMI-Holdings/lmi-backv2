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
Object.defineProperty(exports, "__esModule", { value: true });
const otplib_1 = require("otplib");
const Otp_1 = require("../models/Otp");
class OtpService {
    generateAndSaveOtp(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isOtpExists = yield Otp_1.Otp.findOne({ where: { email: email } });
                if (isOtpExists)
                    yield this.deleteOtp(email);
                const otpCode = otplib_1.totp.generate(String(process.env.OTP_SECRET));
                const otpRecord = yield Otp_1.Otp.create({
                    code: otpCode,
                    email: email,
                    expiry: new Date(Date.now() + 5 * 60 * 1000)
                });
                return otpRecord.code;
            }
            catch (error) {
                throw new Error('Failed to generate and save OTP.');
            }
        });
    }
    isValidOtp(verify) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const otpRecord = yield Otp_1.Otp.findOne({ where: { email: verify.email, code: verify.code } });
                if (!otpRecord) {
                    throw new Error(' Otp does not esist.');
                }
                if (this.otpExpired(otpRecord.expiry)) {
                    throw new Error('OTP has expired. Please resend OTP.');
                }
                return true;
            }
            catch (error) {
                throw new Error(`Error validating OTP: ${error.message}`);
            }
        });
    }
    otpExpired(expiryDate) { return new Date() > expiryDate; }
    deleteOtp(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedRowsCount = yield Otp_1.Otp.destroy({ where: { email } });
                return deletedRowsCount;
            }
            catch (error) {
                console.error('Error deleting OTP:', error);
                throw new Error('Failed to delete OTP.');
            }
        });
    }
}
exports.default = new OtpService();
