import BookingForm from "@/features/booking-form";
import "./booking-page.css";

const BookingPage = () => {
  return (
    <div className="booking-page-wrapper">
      <h1 className="title">Reserve a table</h1>
      <div className="inner-wrapper">
        <div className="flex-1">
          <BookingForm />
        </div>
        <div className="flex-1">
          <img className="image" src={"/images/restaurant.jpg"} />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
