// Phone validity by country;
const countryPhoneNumbers = {
  SN: {
    phoneNumberSize: 9,
    phoneOperator: {
      "78": "Orange",
      "77": "Orange",
      "76": "Orange",
      "70": "Expresso",
    },
  },
  ML: {
    phoneNumberSize: 8,
    phoneOperator: {
      "78": "Orange",
      "77": "Orange",
      "76": "Orange",
      "66": "Malitel",
      "90": "Malitel",
      "91": "Malitel",
    },
  },
  BF: {
    phoneNumberSize: 8,
    phoneOperator: {
      "76": "Orange",
      "75": "Orange",
      "77": "Orange",
      "64": "Orange",
      "74": "Orange",
      "66": "Orange",
      "65": "Orange",
      "55": "Orange",
      "67": "Orange",
      "56": "Orange",
      "54": "Orange",
      "07": "Orange",
      "57": "Orange",
      "06": "Orange",
      "70": "Moov",
      "71": "Moov",
      "72": "Moov",
      "73": "Moov",
      "60": "Moov",
      "61": "Moov",
      "62": "Moov",
      "63": "Moov",
      "01": "Moov",
      "02": "Moov",
      "51": "Moov",
      "52": "Moov",
      "53": "Moov",
      "78": "Telecel",
      "79": "Moov",
      "68": "Moov",
      "69": "Moov",
      "58": "Moov",
      "59": "Moov",
    },
  },
  CI: {
    phoneNumberSize: 10,
    phoneOperator: {
      "01": "Moov",
      "02": "Moov",
      "03": "Moov",
      "40": "Moov",
      "41": "Moov",
      "42": "Moov",
      "43": "Moov",
      "50": "Moov",
      "51": "Moov",
      "52": "Moov",
      "53": "Moov",
      "70": "Moov",
      "71": "Moov",
      "72": "Moov",
      "73": "Moov",
      "04": "MTN",
      "05": "MTN",
      "06": "MTN",
      "44": "MTN",
      "45": "MTN",
      "46": "MTN",
      "54": "MTN",
      "55": "MTN",
      "56": "MTN",
      "64": "MTN",
      "65": "MTN",
      "66": "MTN",
      "74": "MTN",
      "75": "MTN",
      "76": "MTN",
      "84": "MTN",
      "85": "MTN",
      "86": "MTN",
      "94": "MTN",
      "95": "MTN",
      "96": "MTN",
      "07": "Orange",
      "08": "Orange",
      "09": "Orange",
      "47": "Orange",
      "48": "Orange",
      "49": "Orange",
      "57": "Orange",
      "58": "Orange",
      "59": "Orange",
      "67": "Orange",
      "68": "Orange",
      "69": "Orange",
      "77": "Orange",
      "78": "Orange",
      "79": "Orange",
      "87": "Orange",
      "88": "Orange",
      "89": "Orange",
      "97": "Orange",
      "98": "Orange",
    },
  },
  BJ: {
    phoneNumberSize: 8,
    phoneOperator: {
      "51": "MTN",
      "52": "MTN",
      "53": "MTN",
      "54": "MTN",
      "61": "MTN",
      "62": "MTN",
      "66": "MTN",
      "67": "MTN",
      "69": "MTN",
      "90": "MTN",
      "91": "MTN",
      "96": "MTN",
      "97": "MTN",
    },
  },
};

// This method is use to validate the user phone number before submit code
// This method can be optimise again so get back to it later
export const phoneValidity = (isoCountryCode, phone) => {
  let isCountryThere: string[];
  let isValid = false;
  let size = null;

  isCountryThere = Object.keys(countryPhoneNumbers);
  isCountryThere.forEach((key) => {
    if (key === isoCountryCode) {
      size = countryPhoneNumbers[isoCountryCode].phoneNumberSize;
      let operator = Object.keys(
        countryPhoneNumbers[isoCountryCode].phoneOperator
      );
      if (phone.replace(/\s/g, "").length === size) {
        operator.forEach((item) => {
          if (item === phone.slice(0, 2)) {
            isValid = true;
          }
        });
      }
    }
  });

  return isValid;
};

// This method is use to validate the OTP code
export const isOTPValid = (code: string) => {
  let isValid = false;

  if (code.replace(/[\D\s-]/g, "").length === 6 && /\d+/.test(code))
    isValid = true;

  return isValid;
};
