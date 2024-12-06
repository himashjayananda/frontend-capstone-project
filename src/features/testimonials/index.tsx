import { testimonialItems } from "./constants";
import TestimonialCard from "./testimonial-card";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials-wrapper ">
      <h3 className="title">Testimonials</h3>
      <div className="grid-wrapper">
        {testimonialItems.map((item) => (
          <TestimonialCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
