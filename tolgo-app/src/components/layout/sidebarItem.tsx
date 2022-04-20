import React from "react";
import { NavLink } from "react-router-dom";
import { classNames } from "../../utils/utils";

interface Props {
  active: boolean;
  title: string;
  link: string;
  icon: any;
}


const SidebarItem = (props: Props) => (
  <NavLink to={props.link}>
    <li
      className={
        props.active
          ? classNames(
              "sidebar-item bg-white shadow-lg border-transparent flex-shrink"
            )
          : classNames("sidebar-item")
      }
    >
      <div
        className={
          props.active
            ? classNames(
                "p-2 group-hover:bg-tolgo rounded-lg shadow-3xl bg-tolgo"
              )
            : classNames("p-2 group-hover:bg-tolgo rounded-lg shadow-3xl")
        }
      >
        <props.icon
          className={
            props.active
              ? classNames("group-hover:text-white text-white")
              : classNames("group-hover:text-white")
          }
        />
      </div>
      <div className="p-2 group-hover:font-bold">
        <span>{props.title}</span>
      </div>
    </li>
  </NavLink>
);

export default SidebarItem;
