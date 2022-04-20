import React from "react";

function Transactions() {
  return (
    <div className="">
      <div>
        <h1 className="font-extrabold text-xl">Transactions</h1>
      </div>
      <div className="shadow-2xl m-7 rounded-xl my-20 p-30">
        <div className="flex flex-row justify-between items-center ">
          <div>
            <span>Tes dernières transactions</span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col justify-end items-center bg-tolgo py-2 w-44 rounded-md m-2 hover:shadow-2xl my-3">
              <select name="state" id="state" className="bg-tolgo text-white">
                <option value="pending">Filtrer par status</option>
                <option value="pending">En Cours</option>
                <option value="settled">Réglé</option>
                <option value="refused">Réfusé</option>
              </select>
            </div>
            <div className="flex flex-col items-center bg-tolgo py-2 w-44 rounded m-2 hover:shadow-2xl ">
              <span className="text-white uppercase"><a  href="#">Filtrer par date</a></span>
            </div>
          </div>
        </div>
        <div>
          <table className="border-separate">
            <thead className="border-2 ">
              <tr className="justify-self-auto">
                <th className="text-left ">Carte utilisée</th>
                <th className="text-left pl-20 ">Date de la transaction</th>
                <th className="text-left pl-20">Montant</th>
                <th className="text-left pl-20">Statut</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border-2 divide-y divide-light-green">
                <td className="">
                  <div className="center-item py-1 w-32 rounded-md bg-gray-400 my-3">
                    <span className="text-white">Tôlgo #01</span>
                  </div>
                </td>
                <td className="pl-20">20 Juillet 2021 | 15h00</td>
                <td className="pl-20 ">$2,500</td>
                <td className="pl-20">
                  <div className="center-item py-1 w-32 rounded-md bg-gradient-to-r from-yellow-400 to-red-500">
                    <span className="text-white">En cours</span>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td className="">
                  <div className="center-item py-1 w-32 rounded-md bg-red-600 mx-10 ml-0">
                    <span className="text-white">Netflix #01</span>
                  </div>
                </td>
                <td className="pl-20">20 Juillet 2021 | 15h00</td>
                <td className="pl-20">$2,500</td>
                <td className="pl-20">
                  <div className="center-item py-1 w-32 bg-gradient-to-r from-green-200 to-green-700 rounded-md">
                    <span className="text-white">Régle</span>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td className="">
                  <div className="center-item py-1 w-32 rounded-md bg-blue-600 my-3 mx-10 ml-0">
                    <span className="text-white">Facebook #01</span>
                  </div>
                </td>
                <td className="pl-20">20 Juillet 2021 | 15h00</td>
                <td className="pl-20">$2,500</td>
                <td className="pl-20">
                  <div className="center-item py-1 w-32 rounded-md bg-gradient-to-r from-red-400 to-red-600">
                    <span className="text-white">Réfuse</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
