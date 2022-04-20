import React from "react";
import { classNames } from "../../utils/utils";

interface Props {
  handleOnClick?: any;
  disabled?: boolean;
  hidden?: boolean;
  style?: string;
  title: string;
}

const Button = (props: Props) => {
  return (
    <button
      className={
        props.disabled
          ? classNames(
              "w-full p-2 border rounded-md outline-none text-white text-center bg-blue-200 mt-3 cursor-not-allowed"
            )
          : classNames(
              "w-full p-2 border rounded-md outline-none text-white text-center bg-tolgo mt-3 cursor-pointer"
            )
      }
      onClick={(e) => props.handleOnClick(e)}
      hidden={props.hidden}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  );
};

export default Button;
