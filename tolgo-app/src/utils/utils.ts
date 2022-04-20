import { formatOTP, formatPhone } from "./format";
import { isOTPValid, phoneValidity } from "./validation";

export const classNames = (...classes) => classes.filter(Boolean).join(" ");

export const formFieldHandler = (setState, e, name?, info?) => {
  let newState;
  if (e.target.name === "files") {
    newState = setState((prevState) => ({
      ...prevState,
      file: e.target.files[0],
      renderImage: URL.createObjectURL(e.target.files[0]),
    }));
  } else {
    switch (name) {
      case "phone":
        newState = setState((prevState) => ({
          ...prevState,
          isNumberValid: phoneValidity(info, e.target.value),
          [e.target.name]: formatPhone(info, e.target.value),
        }));
        break;
      case "code":
        newState = setState((prevState) => ({
          ...prevState,
          isCodeValid: isOTPValid(e.target.value),
          [e.target.name]: formatOTP(e.target.value),
        }));
        break;
      default:
        newState = setState((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
        break;
    }
  }

  return newState;
};
