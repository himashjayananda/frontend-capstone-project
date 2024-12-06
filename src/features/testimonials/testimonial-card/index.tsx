import { FC } from "react";
import StarIcon from "@/assets/star-solid.svg?react";
import "./testimonial-card.css";

interface TestimonialCardProps {
  name: string;
  comment: string;
  rating: number;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  comment,
  rating,
}) => {
  return (
    <div className="testimonial-card-wrapper">
      <div>
        <blockquote className="comment">{comment}</blockquote>
        <div className="rating-wrapper">
          {[...Array(rating).keys()].map((_, index) => (
            <StarIcon key={index} className="rating" />
          ))}
        </div>
        <div className="name">{name}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
