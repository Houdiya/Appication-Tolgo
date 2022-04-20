import React from "react";
import { formFieldHandler } from "../../utils/utils";
import { MdOutlineQrCode2, MdOutlinePassword } from "react-icons/md";

interface Props {
  handleInputChange?: any;
  placeholder: string;
  labelName: string;
  hidden?: boolean;
  labelText: string;
  isValid?: boolean;
  styles?: string;
  icon?: string;
  info?: string;
  value: string;
  type: string;
  id: string;
  isOK?: boolean;

}
const InputField = (props: Props) => {
  return (
    <div className={props.styles} hidden={props.hidden}>
      <label htmlFor={props.labelName}>{props.labelText}</label>
      <div className="hover:bg-white  hover:border-tolgo focus:outline-none focus:ring-2 w-full p-2 border rounded-md ease-in-out mb-4 justify-between flex items-center content-center"
          style={{
            borderColor: props.isValid===false?"red":"tolgo",
            color: props.isValid===false?"black":"black",
            opacity: props.isValid===false?"0.8":"1",
          }}
      >
        {props.labelName === "phone" && (
          <span className="inline-flex">
            <img
              src={props.icon || "https://assets.ipstack.com/flags/sn.svg"}
              className="h-5 object-cover border-2 rounded-sm"
              alt="Country flag"
            />
          </span>
        )}
        {props.labelName === "code" && (
          <span className="inline-flex">
            <MdOutlineQrCode2 size={25} />
          </span>
        )}
        {props.labelName === "password" && (
          <span className="inline-flex" >
            <MdOutlinePassword size={25} />
          </span>
        )}
        <input
          type={props.type}
          id={props.id}
          name={props.labelName}
          value={props.value}
          placeholder={props.placeholder}
          onChange={(e) =>
            formFieldHandler(props.handleInputChange, e, props.labelName, props.info)
          }
          className={`border-2 border-gray  w-full outline-none text-sm transition duration-150 ease-in-out px-2 py-1 rounded-md ml-1`}
        />
      </div>
    </div>
  );
};

export default InputField;
