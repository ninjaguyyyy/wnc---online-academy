module.exports.sendOTPContent = (otp) => `
  <div style="display: flex;
              justify-content: center;
              margin-left: 200px
  ">
      <div style="font-weight: lighter">
        <img src="https://res.cloudinary.com/dwuma83gt/image/upload/v1624528672/aa_cggrx4.png" atl="logo" width="250" height="150" style="margin-left: 77px;"/>
        <span style="font-size: 18px;
                    font-weight: bold; display: inline-block; margin-left: 30px">
                    Xác thực tài khoản của bạn
        </span>
        <hr style="margin-bottom: 20px; "/>
        Xin chào <br/>
        Cảm ơn bạn đã đăng kí tài khoản tại website <a href="javascript:void(0)">wnc-academy.com </a>!
        <br/><br/>
        Mã xác thực OTP của bạn ở bên dưới:
        <br/>
        OTP:
        <b">${otp}<b/>
        <br/><br/>
        Good bye !!
      </div>
  </div>
`;
