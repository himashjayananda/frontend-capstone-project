import { FC } from "react";
import "./booking-confirmation.css";

interface BookingConfirmationProps {
  bookingConfirmation: number;
}

const BookingConfirmation: FC<BookingConfirmationProps> = ({
  bookingConfirmation,
}) => {
  return (
    <div className="booking-confirmation-wrapper">
      <h5 className="booking-confirmation-title">Your Booking is Confirmed.</h5>
      <div className="booking-confirmation-subtitle">
        Booking ID: {bookingConfirmation}
      </div>
    </div>
  );
};

export default BookingConfirmation;
