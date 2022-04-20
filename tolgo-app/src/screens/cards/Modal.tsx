
import React,{ useState } from "react";
import Card from "../../components/ux/card";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoMdRemoveCircle, IoMdAddCircle } from "react-icons/io";

export const Modal = ({showModal,setShowModal}) => {
  return (
    showModal?
    <div>
      <div>
      </div>
      <div className="">
        <div className="flex">
          <div className="inline-flex">
            <Card
              backgroundColor="hsla(180,0%,50%,0.25)"
              number="4562 1122 4594 7852"
              owner="Houdiya Ndiath"
              type="Carte multiusage"
              expireOn="11/23"
              isLocked={false}
              cvv="112"

            />
          </div>
          <div className="inline-flex">
            <div className="flex flex-col items-center rounded-xl py-7 px-24 shadow-2xl m-5">
              <div className="flex flex-col items-center">
                <div className="bg-tolgo p-4 max-w-max rounded-xl">
                  <GiTakeMyMoney size={30} color="#fff" />
                </div>
                <div>Solde de ma carte</div>
              </div>
              <hr
                className="m-3 h-0.5 w-64 opacity-5"
                style={{
                  background: "linear-gradient(to right, gray, black, gray)",
                }}
              />
              <div className="flex flex-col items-center">
                <span>9 350 FCFA (16 $)</span>
              </div>
              <hr
                className="m-3 h-0.5 w-64 opacity-5"
                style={{
                  background: "linear-gradient(to right, gray, black, gray)",
                }}
              />
              <div className="flex flex-col items-center">
                <div className="center-item bg-tolgo py-2 w-48 rounded-md m-2">
                  <IoMdAddCircle size={20} color="#fff" />
                  <span className="mx-2 text-white uppercase font-bold ">
                  <button className="">
                    Recharger
                  </button>
                  </span>
                </div>
                <div className="center-item bg-red-400 py-2 w-48 rounded-md m-2">
                  <IoMdRemoveCircle size={20} color="#fff" />
                  <span className="mx-2 text-white uppercase font-bold">
                  <button className="">
                    Retirer
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-2xl m-7 rounded-xl p-8">
          <div className="flex flex-row justify-between items-center ">
            <div>
              <span>Tes dernières transactions</span>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col justify-end items-center bg-tolgo py-2 w-44 rounded-md m-2 hover:shadow-2xl hover:p-5">
                <select name="state" id="state" className="bg-tolgo text-white">
                  <option value="pending">Filtrer par status</option>
                  <option value="pending">En Cours</option>
                  <option value="settled">Réglé</option>
                  <option value="refused">Réfusé</option>
                </select>
              </div>
              <div className="flex flex-col items-center bg-tolgo py-2 w-44 rounded m-2 hover:shadow-2xl hover:p-5">
                <span className="text-white uppercase">Filtrer par date</span>
              </div>
            </div>
          </div>
          <div>
            <table className="border-separate">
              <thead>
                <tr className="justify-self-auto">
                  <th className="text-left">Date de la transaction</th>
                  <th className="text-left">Montant</th>
                  <th className="text-left">Statut</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="pr-40">20 Juillet 2021 | 15h00</td>
                  <td className="pr-28">$2,500</td>
                  <td className="">
                    <div className="flex items-center justify-center py-1 w-24 rounded-md bg-gradient-to-r from-yellow-400 to-red-500">
                      <span className="text-white">En cours</span>
                    </div>
                  </td>
                </tr>
                <tr className="">
                  <td className="pr-40">20 Juillet 2021 | 15h00</td>
                  <td className="pr-28">$2,500</td>
                  <td className="">
                    <div className="flex items-center justify-center py-1 w-24 bg-gradient-to-r from-green-200 to-green-700 rounded-md">
                      <span className="text-white">Régle</span>
                    </div>
                  </td>
                </tr>
                <tr className="">
                  <td className="pr-40">20 Juillet 2021 | 15h00</td>
                  <td className="pr-28">$2,500</td>
                  <td className="">
                    <div className="flex items-center justify-center py-1 w-24 rounded-md bg-gradient-to-r from-red-400 to-red-600">
                      <span className="text-white">Réfuse</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    :null
  );
};
