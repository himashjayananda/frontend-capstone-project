import { Link } from "react-router-dom";
import Button from "@/components/button";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-inner-wrapper">
        <div className="content-section">
          <h1 className="title">Little Lemon</h1>
          <h3 className="subtitle">Chicago</h3>
          <p className="paragraph">
            Nestled in the heart of bustling Chicago, Little Lemon is where
            modern flair meets cozy nostalgia. Our diverse, artisanal menu,
            featuring delectable bruschettas, succulent burgers, and refreshing
            Greek salads, is a testament to our belief that food is an art.
          </p>
          <div className="mt-5">
            <Link to={"/booking"}>
              <Button>Reserve a table</Button>
            </Link>
          </div>
        </div>
        <img
          src={"/images/hero.jpg"}
          className="image-section"
          alt="chef-serving-food"
        />
      </div>
    </div>
  );
};

export default Hero;
