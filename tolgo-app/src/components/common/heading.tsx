import React from "react";

interface Props {
  styles?: string;
  title: string;
}

const Heading = (props: Props) => {
  return (
    <div className={props.styles}>
      <span className="font-extrabold text-2xl text-tolgo">{props.title}</span>
    </div>
  );
};

export default Heading;
