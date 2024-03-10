import React from "react";
import { NavLink } from "react-router-dom";
import { SideBarLink } from "./../../interfaces";
import { MdDashboard } from "react-icons/md";
import { MdOutlineMonitor } from "react-icons/md";
import { FaMugSaucer } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHands } from "react-icons/fa";
const SideBar = () => {
  const links: SideBarLink[] = [
    {
      path: "/dashboard",
      text: "Dashboard",
      icon: MdDashboard,
    },
    {
      path: "/workplace",
      text: "Workplace",
      icon: MdOutlineMonitor,
    },
    {
      path: "/holidays",
      text: "Holidays",
      icon: FaMugSaucer,
    },
    {
      path: "/employees",
      text: "Employees",
      icon: BsFillPeopleFill,
    },
    {
      path: "/inboundRequests",
      text: "Inbound Requests",
      icon: FaHands,
    },
  ];
  return (
    <div className="d-flex flex-column">
      {links &&
        links.length > 0 &&
        links.map((link) => (
          <NavLink
            to={link.path}
            key={link.path}
            className={`d-flex  flex-column justify-content-center align-items-center  gap-1 sid-bar-link-padding `}
          >
            <div className=" d-flex  flex-column justify-content-center align-items-center  gap-2  position-relative">
              {link.path === "/employees" ? (
                <span className=" badge bg-pale-red rounded-circle  badge-position">
                  5
                </span>
              ) : null}
              <link.icon size={28.6} color="white" />
              <p className="text-white fs-small-12 text-center">{link.text}</p>
            </div>
          </NavLink>
        ))}
    </div>
  );
};

export default SideBar;
