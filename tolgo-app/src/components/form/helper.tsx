import React from "react";

const Helper = (props: any) => {
  return (
    <div className="py-3">
      <p className="text-xs">
        Mot de passe oublié ?
        <a
          href="https://media.artzine.com/WTqy7ekLLBX27H4gxt_8uAGSQPk=/1024x/listings/1905/8800/bVAEK2fbtANKYjvhJwTKuD3P"
          className="text-tolgo"
        >
          {" "}
          Clique ici
        </a>
      </p>
      <p className="text-xs">
        Tu n'as pas de compte ?
        <a href="/pages/inscription.html" className="text-tolgo">
          {" "}
          Inscris-toi
        </a>
      </p>
    </div>
  );
};

export default Helper;
