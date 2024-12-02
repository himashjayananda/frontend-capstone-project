import { useState } from "react";
import Hamburger from "@/assets/hamburger.svg?react";
import { cn } from "@/lib/cn";
import "./nav.css";

const Nav = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = () => setIsExpanded(!isExpanded);

  return (
    <nav className="nav-wrapper">
      <Hamburger className="hamburger" onClick={toggleIsExpanded} />
      <ul className={cn("nav-item-wrapper", isExpanded && "expanded-nav")}>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Nav;
