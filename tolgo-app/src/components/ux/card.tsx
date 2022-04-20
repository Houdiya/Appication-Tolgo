import React from "react";
import { BsUnlockFill, BsLockFill } from "react-icons/bs";
import mastercard from "./../../assets/img/mastercard.png";
import tolgo_white from "./../../assets/logo/tolgo_white.png";

interface Props {
  logo?: any;
  backgroundImgURL?: any;
  backgroundColor?: string;
  owner: string;
  number: string;
  expireOn: string;
  cvv: string;
  type: string;
  isLocked: boolean;
}

const Card = (props: Props) => {
  return (
    <div
      className="flex flex-col bg-no-repeat rounded-xl h-56 w-96 hover:shadow-2xl m-7 justify-around transition-all ease-linear duration-300"
      style={{
        backgroundImage: `url(${props.backgroundImgURL})`,
        backgroundSize: "100% 160%",
        backgroundPosition: "center",
        background: `${props.backgroundColor ? props.backgroundColor : null}`,
        filter: "grayscale(15%)",
      }}
    >
      <div className="p-2">
        <div className="flex  p-1.5 justify-between ">
          <div className=" p-1.5">
            <img src={props.logo || tolgo_white} alt="" className="h-12" />
          </div>
          <div className="p-1" style={{}}>
            {!props.isLocked ? (
              <BsUnlockFill size={25} color="#E1E1E1" className=""/>
            ) : (
              <BsLockFill size={25} color="#1DA1F2" />
            )}
          </div>
        </div>
        <div className="p-1.5">
          <span className="p-1.5 text-white font-bold text-xl tracking-wider">
            {props.number}
          </span>
        </div>
        <div className="flex justify-between  p-1.5">
          <div className="p-1.5">
            <span className="text-white font-bold">{props.owner}</span>
          </div>
          <div className="p-1.5">
            <span className="text-white font-bold">{props.expireOn}</span>
          </div>
          <div className="p-1.5">
            <span className="text-white font-bold">CVV : {props.cvv}</span>
          </div>
        </div>
        <div className="flex p-1.5 justify-between items-center">
          <div className="p-1.5">
            <span className="text-white font-bold">{props.type}</span>
          </div>
          <div className="p-1.5">
            <img src={mastercard} alt="Mastercard logo" className="h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
