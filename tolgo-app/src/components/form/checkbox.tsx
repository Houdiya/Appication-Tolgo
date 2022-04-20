import React from "react";

interface Props {
  style?: string;
  hidden?: boolean;
  labelText: string;
}

const CheckBox = (props: Props) => {
  return (
    <div style={{display: props.hidden?'none':'inline-flex'}} className="inline-flex items-center justify-center">
      <input
        type="checkbox"
        id="rememberMe"
        className="checked:bg-blue-600 checked:border-transparent"
      />
      <label htmlFor="rememberMe" className="text-xs pl-1">
        {props.labelText}
      </label>
    </div>
  );
};

export default CheckBox;
