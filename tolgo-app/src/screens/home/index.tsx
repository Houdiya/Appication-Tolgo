import React from "react";
import tolgo from "../../assets/logo/tolgo.png"
import accueil from "../../assets/img/page-daccueil.png"
import carte from "../../assets/img/carte-bancaire.png"
import transaction from "../../assets/img/transaction.png"
import profil from "../../assets/img/profil.png"
import deconnexion from "../../assets/img/connexion.png"

function Dashboard() {
  return(    
    <div className="h-screen flex bg-gray" > 
        <div className="w-1/6 h-full m-10" >
          <div className="w-32 max-w-md">
              <img src={tolgo} alt="icon" />
          </div>
          <div className="w-50 h-12 my-3 max-w-md  bg-white rounded-lg border border-primaryBorder shadow-default ">
            <tr className="flex space-x-1 ">
              <th className="w-10 h-16 ml-2 my-3">
                <img src={accueil} className="w-full h-5 m-auto bg-white rounded-sm" alt="icon" />
              </th>
              <th className="inline mb-3 my-3 font-thin text-sm">
                Tableau de bord
              </th>
            </tr>
          </div>
          <div className="w-50 h-12 max-w-md">
            <tr className="flex space-x-1 ">
              <th className="w-10 h-20 ml-2">
                <img src={carte} className="w-full h-5 m-auto bg-white rounded-sm" alt="icon" />
              </th>
              <th className="inline mb-3 font-thin text-sm">
                Mes cartes
              </th>
            </tr>
          </div>
          <div className="w-50 h-12 max-w-md ">
            <tr className="flex space-x-1 ">
              <th className="w-10 h-20 ml-2">
                <img src={transaction} className="w-full h-5 m-auto bg-white rounded-sm" alt="icon" />
              </th>
              <th className="inline font-thin text-sm">
                Mes transactions
              </th>
            </tr>
          </div>
          <div className="">
              <h2 className="inline mb-3 ml-2 font-thin text-sm">
                ACCOUNT PAGE
              </h2>
          </div>
          <div className="w-50 h-12 my-3 max-w-md ">
            <tr className="flex space-x-1 ">
              <th className="w-10 h-16 ml-2 my-3">
                <img src={profil} className="w-full h-5 bg-white rounded-sm" alt="icon" />
              </th>
              <th className="inline mb-3 my-3 font-thin text-sm">
                Profile
              </th>
            </tr>
          </div>
          <div className="w-50 h-12 max-w-md">
            <tr className="flex space-x-1 ">
              <th className="w-10 h-16 ml-2">
                <img src={deconnexion} className="w-full h-5 m-auto bg-white rounded-sm" alt="icon" />
              </th>
              <th className="inline mb-3 font-thin text-sm">
                Déconnexion
              </th>
            </tr>
          </div>
        </div>
      <div className="h-2/3 w-3/4">
        <div className="w-full h-15 my-10" >
          <h1 className="text-2xl font-black ">Tableau de Bord</h1>
        </div>
        <div className=' h-3/4 w-full bg-white rounded-lg border border-primaryBorder shadow-default  py-8 px-8'>
          <h1 className="text-2xl font-black">Hello!</h1>
          <p className="w-1/2 mb-3 font-thin text-sm">
            Générons ensemble la première carte!<span className="text-tolgo"> C'est 100% gratuit!</span>     
            <p>    Nous aimerions avoir plus d'information sur toi</p>
            </p>
          <form className="">
          <div className="w-full">
            <label>Nom</label>
          </div>
          <div>
            <input
              className="w-1/2 h-8 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              placeholder=' Entrer le nom'
              />
          </div>
          <div className="w-full">
            <label>Prenom</label>
          </div>
          <div>
            <input
              className="w-1/2  h-8 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              placeholder=' Entrer le prenom'
              />
          </div>
          <div className=''>
            <button
              className="bg-tolgo hover:bg-tolgo text-white font-bold py-2 px-4 rounded">
              CONTINUER
            </button>
          </div>
          </form>
        </div>
        </div>
      </div>    
  
  );
  }
  export default Dashboard;
