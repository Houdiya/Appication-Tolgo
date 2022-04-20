import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "../../services/firebase";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import Button from "../../components/form/button";
import CheckBox from "../../components/form/checkbox";
import Helper from "../../components/form/helper";
import InputField from "../../components/form/input";
import connexion from "./../../assets/img/connexion.jpg";
import tolgo_blue from "./../../assets/logo/tolgo_blue.png";
import { WindowService } from "../../utils/window";
import { setConfirmationResult } from "../../features/utils/utilsSlice";
import { RootState } from "../../app/store";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../api/mutations/users";
import getLocationAsync from "../../services/location/location";
import { ReactComponent as BallSpinner } from "./../../assets/spinner/ball-spinner.svg";

declare let window: WindowService;

const auth = getAuth(firebase);
auth.useDeviceLanguage();

const SignUp = () => {
  const [state, setState] = useState({
    isPhoneSubmited: false,
    isPhoneValidated: false,
    isNumberValid: false,
    country_code: "SN",
    calling_code: "221",
    isCodeValid: false,
    isOTPSent: false,
    country_flag: "",
    password: "",
    phone: "",
    code: "",
  });
  const confirmationResult = useSelector(
    (state: RootState) => state.utils.confirmationResult
  );
  const recaptcha = useRef<any>(null);
  const dispatch = useDispatch();

  const [register] = useMutation(REGISTER_USER, {
    onCompleted: (data) =>
      alert("Votre inscription a reussi " + data.register.user._id),
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
  }, [state.calling_code]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpRecaptcha();
    let phoneNumber =
      "+" + state.calling_code + state.phone.replace(/[\D\s-]/g, "");
    console.log(phoneNumber);

    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        dispatch(setConfirmationResult(confirmationResult));
        setState((prevState) => ({
          ...prevState,
          isOTPSent: true,
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      recaptcha.current,
      {
        size: "invisible",
        callback: function (response) {
          this.handleSubmit();
        },
      },
      auth
    );
  };

  // Méthode de vérification du code
  const onValidateCode = async (e) => {
    e.preventDefault();
    try {
      await confirmationResult
        .confirm(state.code.replace(/[\D\s-]/g, ""))
        .then(function (result) {
          let user = result.user;
          console.log(user);
          setState((prevState) => ({
            ...prevState,
            isPhoneValidated: true,
          }));
        })
        .catch(function (error) {
          alert("wrong otp" + error);
        });
    } catch (e) {
      console.error(e);
    }
  };

  const onRegister = async (e) => {
    e.preventDefault();
    register({
      variables: {
        phone: state.phone.replace(/[\D\s-]/g, ""),
        password: state.password.trim(),
      },
    });
  };

  return (
    <div className="container grid grid-cols-12  h-screen ">
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
        <div className="max-w-md mx-auto px-16 py-11">
          <div className="flex-initial">
            <img src={tolgo_blue} alt="logo de tôlgo" />
          </div>
          {!state.isPhoneValidated && (
            <p className="my-5 font-thin text-sm">
              Pour vous <span className="text-tolgo font-bold">inscrire</span>,
              Envoyez votre numéro de téléphone. Vous allez recevoir un code de
              vérification.
            </p>
          )}
          {state.isPhoneValidated && (
            <p className="my-5 font-thin text-sm">
              Vérification <span className="text-tolgo font-bold">terminé</span>
              , Entrez un mot de passe fort pour securiser votre compte.
            </p>
          )}
          <InputField
            id="phone"
            type="tel"
            icon={state.country_flag}
            labelName="phone"
            value={state.phone}
            isValid={
              state.phone.length !== 0
                ? state.isNumberValid
                  ? true
                  : false
                : true
            }
            info={state.country_code?.toLocaleUpperCase()}
            hidden={state.isPhoneValidated}
            labelText="Numéro de téléphone"
            placeholder="Entrez votre numéro ici"
            handleInputChange={setState}
          />
          <InputField
            id="code"
            type="text"
            hidden={!state.isOTPSent || state.isPhoneValidated}
            value={state.code}
            isValid={
              state.code.length !== 0
                ? state.isCodeValid
                  ? true
                  : false
                : true
            }
            labelName="code"
            labelText="Code de vérification"
            placeholder="Tapez le code reçu par sms"
            handleInputChange={setState}
          />
          <InputField
            id="password"
            type="password"
            labelName="password"
            value={state.password}
            hidden={!state.isPhoneValidated}
            labelText="Mot de passe"
            placeholder="Tapez votre mot de passe"
            handleInputChange={setState}
            
          />
          <CheckBox
            hidden={!state.isPhoneValidated}
            labelText="Se souvenir de moi"
          />
          <div
            className={
              "form-check form-check-info text-left inline-flex items-center justify-center " +
                !state.isPhoneValidated && "hidden"
            }
          >
            <input
              type="checkbox"
              id="rememberMe"
              className="checked:bg-blue-600 checked:border-transparent"
            />
            <label htmlFor="flexCheckDefault" className="text-xs pl-1">
              J'accepte les{" "}
              <a
                href="https://media.artzine.com/WTqy7ekLLBX27H4gxt_8uAGSQPk=/1024x/listings/1905/8800/bVAEK2fbtANKYjvhJwTKuD3P"
                className="text-tolgo font-weight-bolder"
              >
                Termes et conditions d'utilisation
              </a>
            </label>
          </div>
          {!state.isOTPSent && (
            <Button
              title="Envoyer"
              handleOnClick={handleSubmit}
              disabled={state.phone === "" || !state.isNumberValid}
            />
          )}
          {state.isOTPSent && !state.isPhoneValidated && (
            <Button 
              title="Valider" 
              handleOnClick={onValidateCode} 
              disabled={state.code === "" || state.code.length<6}
              />
          )}
          {state.isPhoneValidated && (
            <Button 
            title="Enregister" 
            handleOnClick={onRegister} 
            disabled={state.password === "" || state.password.length<8}
            />
          )}
          <Helper />
        </div>
        <button ref={recaptcha}></button>
      </div>
      <div className=" col-span-7">
        <img className="sm-w-0 object-cover" src={connexion} alt="" />
      </div>
    </div>
  );
};

export default SignUp;
