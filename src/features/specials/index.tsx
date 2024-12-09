import Button from "@/components/button";
import SpecialsCard from "./specials-card";
import { specialItems } from "./constants";
import "./specials.css";

const Specials = () => {
  return (
    <div className="specials-wrapper">
      <div className="left-section">
        <h2 className="title">This weeks specials!</h2>
        <Button>Online Menu</Button>
      </div>

      <div className="right-section">
        {specialItems.map((specialItem) => (
          <SpecialsCard key={specialItem.item} {...specialItem} />
        ))}
      </div>
    </div>
  );
};

export default Specials;
