import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import Heading from "../../components/common/heading";
import Button from "../../components/form/button";
import tolgo_blue from "./../../assets/logo/tolgo_blue.png";
import CheckBox from "../../components/form/checkbox";
import Helper from "../../components/form/helper";
import InputField from "../../components/form/input";
import connexion from "./../../assets/img/connexion.jpg";
import { LOGIN } from "../../api/queries/users";
import getLocationAsync from "../../services/location/location";
import { ReactComponent as BallSpinner } from "./../../assets/spinner/ball-spinner.svg";

function SignIn() {
  const [state, setState] = useState({
    isNumberValid: false,
    country_code: "SN",
    calling_code: "221",
    country_flag: "",
    password: "",
    phone: "",
  });

  const [login] = useLazyQuery(LOGIN, {
    onCompleted: (data) =>
      alert("Votre connexion a reussi " + data.login.user._id),
    onError: (error) => alert(error),
  });

  useEffect(() => {
    getLocationAsync().then((res: any) => {
      if (res?.success) {
        setState((prevState) => ({
          ...prevState,
          country_flag: res?.location?.country_flag,
          calling_code: res?.location?.calling_code,
          country_code: res?.country_code,
        }));
      }
    });
  }, [state.calling_code, state.isNumberValid, state.phone]);

  function handleSubmit() {
    login({
      variables: {
        phone: state.phone.replace(/[\D\s-]/g, ""),
        password: state.password.trim(),
      },
    });
  }

  return (
    <div className="container grid grid-cols-12 h-screen">
      <div className="col-span-5">
        {false && (
          <BallSpinner
            style={{
              position: "absolute",
              top: "50%",
              left: "41%",
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
        <div className="max-w-md m-auto py-11 px-16">
          <div className="flex-initial">
            <img src={tolgo_blue} alt="logo de tôlgo" />
          </div>
          <Heading title="Welcome Back" styles="py-5" />
          <InputField
            id="phone"
            type="tel"
            labelName="phone"
            value={state.phone}
            icon={state.country_flag}
            isValid={
              state.phone.length !== 0
                ? state.isNumberValid
                  ? true
                  : false
                : true
            }
            info={state.country_code?.toLocaleUpperCase()}
            handleInputChange={setState}
            labelText="Numéro de téléphone"
            placeholder="Entrez votre numéro ici"
          />
          <InputField
            styles="pt-2"
            id="password"
            type="password"
            labelName="password"
            value={state.password}
            labelText="Mot de passe"
            placeholder="Tapez votre mot de passe"
            handleInputChange={setState}
          />
          <CheckBox labelText="Se souvenir de moi" hidden={true} />
          <Button 
            title="Connexion" 
            handleOnClick={handleSubmit}
            disabled={state.phone === "" || !state.isNumberValid || state.password==="" || state.password.length<8}
            />
          <Helper />
        </div>
      </div>
      <div className="col-span-7">
        <img className="object-cover" src={connexion} alt="" />
      </div>
    </div>
  );
}

export default SignIn;
