import React,{ useState } from "react";
import Card from "../../components/ux/card";
import { IoMdAddCircle } from "react-icons/io";
import card_one from "../../assets/img/card_one.jpg";
import card_two from "../../assets/img/card_two.jpg";
import card_three from "../../assets/img/card_three.jpg";
import Dashboard from "../../screens/home/index"
import {Modal} from "../../screens/cards/Modal"



function Cards() {
  const [showModal, setShowModal] = useState(false);
  const Carte=useState();
  const closeModal = (e) => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };
  if(!showModal){
  return (
    <div className="">
      <div>
        <h1 className="font-extrabold text-xl">Mes cartes</h1>
      </div>
      <div className="flex flex-wrap items-center relative">
        <button className="fixed top-10 right-5 center-item group p-2 w-14 h-14 bg-blue-400 rounded-full hover:bg-tolgo active:shadow-xl mouse shadow transition ease-in duration-200 focus:outline-none">
          <IoMdAddCircle size={25} className="group-hover:text-white" />
        </button>
        <tr onClick={openModal}>
          {
          <Card
            backgroundColor="hsla(180,0%,50%,0.25)"
            number="4562 1122 4594 7852"
            owner="Houdiya Ndiath"
            type="Carte multiusage"
            expireOn="11/23"
            isLocked={true}
            cvv="112"
        />
          }
        </tr>
        <Card
          number="4562 1122 4594 7852"
          backgroundImgURL={card_one}
          owner="Houdiya Ndiath"
          type="Carte multiusage"
          expireOn="11/23"
          isLocked={false}
          cvv="112"
        />
        <Card
          number="4562 1122 4594 7852"
          backgroundImgURL={card_two}
          owner="Houdiya Ndiath"
          type="Carte multiusage"
          expireOn="11/23"
          isLocked={false}
          cvv="112"
        />
        <Card
          number="4562 1122 4594 7852"
          backgroundImgURL={card_three}
          owner="Houdiya Ndiath"
          type="Carte multiusage"
          expireOn="11/23"
          isLocked={true}
          cvv="112"
        />
        <Card
          backgroundColor="#24cb7b"
          number="4562 1122 4594 7852"
          backgroundImgURL={card_one}
          owner="Houdiya Ndiath"
          type="Carte multiusage"
          expireOn="11/23"
          isLocked={false}
          cvv="112"
        />
        <Card
          backgroundColor="red"
          number="4562 1122 4594 7852"
          owner="Houdiya Ndiath"
          type="Carte multiusage"
          expireOn="11/23"
          isLocked={false}
          cvv="112"
        />
      </div>
    </div>
  );
}
else{
  return(
  <div><Modal showModal={showModal} setShowModal={setShowModal}/><button/>
  </div> 
  );
}
}
export default Cards;
