import { totp } from 'otplib';
import { Otp } from '../models/Otp';
import { expiryDate5min } from '../utils/Constant';
import { IVerifyOtp } from '../dtos/Auth';


interface IOtpService {
  generateAndSaveOtp(email: string): Promise<string>;
  isValidOtp(verify: IVerifyOtp): Promise<boolean>;
  deleteOtp(email: string): Promise<number>;
  otpExpired(expiryDate: Date): boolean;
}



class OtpService implements IOtpService {

  async generateAndSaveOtp(email: string): Promise<string> {
    try {
      const isOtpExists = await Otp.findOne({ where: { email: email }})
      if(isOtpExists) await this.deleteOtp(email)
      
      const otpCode = totp.generate(String(process.env.OTP_SECRET));

      const otpRecord = await Otp.create({
        code: otpCode,
        email: email,
        expiry: new Date(Date.now() + 5 * 60 * 1000)
      });

      return otpRecord.code;

    } catch (error) {
        throw new Error('Failed to generate and save OTP.');
    }
  }

  async isValidOtp(verify: IVerifyOtp): Promise<boolean> {
    try {
      const otpRecord = await Otp.findOne({ where: { email: verify.email, code: verify.code } });

      if (!otpRecord) {
        throw new Error(' Otp does not esist.');
      }

      if (this.otpExpired(otpRecord.expiry)) {
        throw new Error('OTP has expired. Please resend OTP.');
      }

      return true
    } catch (error: any) {
      throw new Error(`Error validating OTP: ${error.message}`);
    }
  }

  otpExpired(expiryDate: Date): boolean { return new Date() > expiryDate }

  async deleteOtp(email: string): Promise<number> {
    try {
      const deletedRowsCount = await Otp.destroy({ where: { email } });
      return deletedRowsCount;
    } catch (error) {
      console.error('Error deleting OTP:', error);
      throw new Error('Failed to delete OTP.');
    }
  }
}


export default new OtpService()