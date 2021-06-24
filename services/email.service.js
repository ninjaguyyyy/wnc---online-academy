const { sendOTPContent } = require('../constants/content-mail.constant');
const SUBJECTS = require('../constants/subject-mail.constant');
const mailer = require('../helpers/mailer');

const sendOTP = (to, otp) => {
  const contentEmail = sendOTPContent(otp);
  mailer.sendMail(to, SUBJECTS.SEND_OTP, contentEmail);
};

module.exports = {
  sendOTP,
};
