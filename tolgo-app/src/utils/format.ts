// Format OTP code
export const formatOTP = (OTP) => {
  let code = OTP.replace(/[\D\s-]/g, "");
  code = code.slice(0, 2) + " " + code.slice(2, 4) + " " + code.slice(4, 6);
  return code;
};

// Reformate le numéro de téléphone après la validation
export const formatPhone = (isoCountryCode, phone) => {
  let number = phone.replace(/[\D\s-]/g, "");
  switch (isoCountryCode) {
    case "SN":
      number =
        number.slice(0, 2) +
        " " +
        number.slice(2, 5) +
        " " +
        number.slice(5, 7) +
        " " +
        number.slice(7, 9);
      break;
    case "CI":
      number =
        number.slice(0, 2) +
        " " +
        number.slice(2, 5) +
        " " +
        number.slice(5, 8) +
        " " +
        number.slice(8, 10);
      break;
    default:
      number =
        number.slice(0, 2) +
        " " +
        number.slice(2, 4) +
        " " +
        number.slice(4, 6) +
        " " +
        number.slice(6, 8);
      break;
  }
  return number;
};
