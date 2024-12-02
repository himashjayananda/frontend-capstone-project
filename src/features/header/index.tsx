import Nav from "@/features/nav";
import Logo from "@/assets/logo.svg?react";
import "./header.css";

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header-wrapper-inner">
        <Logo className="logo" />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
