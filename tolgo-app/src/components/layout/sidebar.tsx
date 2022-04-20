import React, { useEffect, useState } from "react";
import { RiFilePaperFill } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import tolgo_blue from "./../../assets/logo/tolgo_blue.png";
import { FaHouseUser, FaSignOutAlt } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import SidebarItem from "./sidebarItem";

const Sidebar = (props) => {
  const [state, setState] = useState({
    activeLink: "/",
  });
  const location = useLocation();
  useEffect(() => {
    setState((prevState) => ({
      activeLink: location.pathname,
    }));
  }, [location, state.activeLink]);

  return (
    <div className="h-screen m-9 top-9 sticky">
      <div className="center-item flex-col">
        <img src={tolgo_blue} alt="Tolgo's logo" className="h-14" />
        <hr
          className="m-3 h-0.5 w-full opacity-5"
          style={{
            background: "linear-gradient(to right, gray, black, gray)",
          }}
        />
      </div>
      <div className="">
        <div className="">
          <ul>
            <SidebarItem
              active={state.activeLink === "/"}
              link="/"
              title="Tableau de bord"
              icon={SiHomeassistantcommunitystore}
            />
            <SidebarItem
              active={state.activeLink === "/mes-cartes"}
              link="/mes-cartes"
              title="Mes cartes"
              icon={BsCreditCard2FrontFill}
            />
            <SidebarItem
              active={state.activeLink === "/mes-transactions"}
              link="/mes-transactions"
              title="Mes transactions"
              icon={RiFilePaperFill}
            />
          </ul>
        </div>
        <div>
          <ul>
            <SidebarItem
              active={state.activeLink === "/profil"}
              link="/profil"
              title="Profil"
              icon={FaHouseUser}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
