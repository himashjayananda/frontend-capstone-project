import Button from "@/components/button";
import SpecialsCard from "./specials-card";
import { specialItems } from "./constants";
import "./specials.css";

const Specials = () => {
  return (
    <div className="specials-wrapper">
      <div className="left-section">
        <h3 className="title">This weeks specials!</h3>
        <Button>Online Menu</Button>
      </div>

      <div className="right-section">
        {specialItems.map((item) => (
          <SpecialsCard key={item.item} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Specials;
