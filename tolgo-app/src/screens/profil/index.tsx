import React from "react";
import { IoMdPhotos } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { GiCube } from "react-icons/gi";
import { HiIdentification } from "react-icons/hi";
import { GrLogin } from "react-icons/gr";

function Profile() {
  return (
    <div className="h-screen">
      <div>
        <div className="flex flex-col bg-tolgo h-32 rounded-xl">
          <div>
            <span className="w-4/5 font-extrabold text-xl p-4 inline-block">Mon Compte</span>
            <div className="center-item inline-flex px-3 sidebar-item center-item bg-tolgo shadow-lg flex-shrin">
              <div className="p-2 group-hover:bg-tolgo rounded-lg shadow-3xl">
                <GrLogin className="group-hover:text-white" />
              </div>
              <span className="px-2">Deconnexion</span>
            </div>

        </div>
    </div>
   </div>

        <div>
        <div className="flex justify-between items-center m-8 h-28 opacity-95 bg-white border-collapse rounded-xl transform -translate-y-20 shadow-lg">
          <div className="center-item px-3">
            <img
              src="https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlJTIwYmxhY2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="object-cover rounded h-20"
            />
            <span className="m-3 px-3 font-bold">Houdiya Ndiath</span>
          </div>
          <div className="center-item">
            <div className="center-item px-3 sidebar-item bg-white shadow-lg border-transparent flex-shrink">
              <div className="p-2 group-hover:bg-tolgo rounded-lg shadow-3xl bg-tolgo">
                <GiCube className="group-hover:text-white text-white"/>
              </div>
              <span className="px-2">Informations</span>
            </div>
            <div className="center-item px-3 sidebar-item">
              <div className="p-2 group-hover:bg-tolgo rounded-lg shadow-3xl">
                <HiIdentification className="group-hover:text-white" />
              </div>
              <span className="px-2">Identité</span>
            </div>
            <div className="center-item px-3 sidebar-item">
              <div className="p-2 group-hover:bg-tolgo rounded-lg shadow-3xl">
                <IoMdPhotos className="group-hover:text-white" />
              </div>
              <span className="px-2">Photo de profil</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-stretch transform -translate-y-20">
        <div className="max-w-max py-3 ring-blue-300 bg-white m-2 p-4 rounded-xl">
          <div className="flex justify-between items-center">
            <span>Informations sur mon profil</span>
            <FaUserEdit size={25} />
          </div>
          <hr
            className="my-3 h-0.5 w-full opacity-5"
            style={{
              background: "linear-gradient(to right, gray, black, gray)",
            }}
          />
          <div>
            <div className="py-2">
              Nom :
              <span className="opacity-60 px-4 font-thin"> Nonguierma</span>
            </div>
            <div className="py-2">
              Prénom :<span className="opacity-60 px-4 font-thin"> Axel</span>
            </div>
            <div className="py-2">
              Téléphone:
              <span className="opacity-60 px-4 font-thin">
                {" "}
                (221) 78 296 78 25
              </span>
            </div>
            <div className="py-2">
              Email:
              <span className="opacity-60 px-4 font-thin">
                anonguierma@mail.com
              </span>
            </div>
            <div className="py-2">
              Adresse:
              <span className="opacity-60 px-4 font-thin">
                Ouakam cité Avion, Eglise bleue
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-max py-3 ring-blue-300 bg-white m-2 p-4 rounded-xl">
          <div className="flex justify-between items-center">
            <span>Paramètres de connexion</span>
            <FaUserEdit size={25} />
          </div>
          <hr
            className="my-3 h-0.5 w-full opacity-5"
            style={{
              background: "linear-gradient(to right, gray, black, gray)",
            }}
          />
          <div>
            <div className="py-2">
              Email:
              <span className="opacity-60 px-4 font-thin">
                anonguierma@mail.com
              </span>
            </div>
            <div className="py-2">
              Mot de passe:
              <span className="opacity-60 px-4 font-thin">**************</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
