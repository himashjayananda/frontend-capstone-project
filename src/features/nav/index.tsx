import { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "@/assets/hamburger.svg?react";
import { cn } from "@/lib/cn";
import "./nav.css";

const Nav = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = () => setIsExpanded(!isExpanded);
  const collapseNav = () => setIsExpanded(false);

  return (
    <nav className="nav-wrapper">
      <Hamburger
        className={cn("hamburger", isExpanded && "is-active")}
        onClick={toggleIsExpanded}
      />
      <ul className={cn("nav-item-wrapper", isExpanded && "expanded-nav")}>
        <li>
          <NavLink to={"/"} onClick={collapseNav}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"#about"} onClick={collapseNav}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={"#menu"} onClick={collapseNav}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to={"/booking"} onClick={collapseNav}>
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink to={"#order-online"} onClick={collapseNav}>
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink to={"#order-online"} onClick={collapseNav}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
