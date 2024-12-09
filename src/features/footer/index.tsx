import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-inner-wrapper">
        <div>
          <img
            src="/images/logo-footer.png"
            alt="little lemon footer logo"
            className="h-[160px] w-auto"
          />
        </div>
        <div>
          <h5 className="section-title">Sitemap</h5>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#about">About</Link>
            </li>
            <li>
              <Link to="#menu">Menu</Link>
            </li>
            <li>
              <Link to="#about">Reservations</Link>
            </li>
            <li>
              <Link to="#order-online">Order Online</Link>
            </li>
            <li>
              <Link to="#login">Login</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="section-title">Contact</h5>
          <div>400 C Lemon Road</div>
          <div>123-456-7890</div>
          <div>little-lemon@support.com</div>
        </div>
        <div>
          <h5 className="section-title">Social Media Links</h5>
          <ul>
            <li>
              <Link to="https://www.facebook.com/">Facebook</Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/">Instagram</Link>
            </li>
            <li>
              <Link to="https://x.com/">Twitter</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
