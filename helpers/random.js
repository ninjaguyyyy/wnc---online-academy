const MIN_OTP_NUMBER = 100000
const MAX_OTP_NUMBER = 999999

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

module.exports.randomOTPNumber = () => {
  return randomIntFromInterval(MIN_OTP_NUMBER, MAX_OTP_NUMBER)
}
