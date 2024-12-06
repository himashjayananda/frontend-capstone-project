import { FC } from "react";
import DeliveryIcon from "@/assets/delivery.svg?react";
import "./specials-card.css";

interface SpecialsCardProps {
  item: string;
  img: string;
  price: string;
  description: string;
}

const SpecialsCard: FC<SpecialsCardProps> = ({
  item,
  img,
  price,
  description,
}) => {
  return (
    <div className="specials-card-wrapper">
      <img src={img} className="card-image" />
      <div className="card-content">
        <div className="name-price-section">
          <span className="item">{item}</span>
          <span className="price">{`$${price}`}</span>
        </div>
        <p className="description">{description}</p>
        <button className="button">
          <span>Order a delivery</span>
          <DeliveryIcon />
        </button>
      </div>
    </div>
  );
};

export default SpecialsCard;
