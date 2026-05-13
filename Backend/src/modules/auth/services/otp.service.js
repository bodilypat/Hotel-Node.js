//src/modules/auth/services/otp.service.js 
class OTPService {
    generateOTP(length = 6) {
        let otp = '';

        for(let i = 0; i < length; i++) {
            otp += Math.floor(Math.random() * 10);
        }

        return otp;
    }

    async sendOTP(phone, otp) {
        console.log(
            `Sending OTP $(otp) to $(phone)`
        )
    }
}

module.exports = new OTPService();


