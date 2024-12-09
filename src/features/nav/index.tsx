import { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "@/assets/hamburger.svg?react";
import { cn } from "@/lib/cn";
import "./nav.css";

const Nav = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = () => setIsExpanded(!isExpanded);

  return (
    <nav className="nav-wrapper">
      <Hamburger
        className={cn("hamburger", isExpanded && "is-active")}
        onClick={toggleIsExpanded}
      />
      <ul className={cn("nav-item-wrapper", isExpanded && "expanded-nav")}>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"#about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"#menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"#reservations"}>Reservations</NavLink>
        </li>
        <li>
          <NavLink to={"#order-online"}>Order Online</NavLink>
        </li>
        <li>
          <NavLink to={"#order-online"}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
