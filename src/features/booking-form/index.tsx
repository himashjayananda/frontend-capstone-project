import Button from "@/components/button";
import { SubmitHandler, useForm } from "react-hook-form";
import "./booking-form.css";

interface BookingFormProps {
  date: string;
  time: string;
  numberOfGuests: string;
  occasion: string;
}

const BookingForm = () => {
  const { register, handleSubmit } = useForm<BookingFormProps>();

  const handleOnSubmit: SubmitHandler<BookingFormProps> = (data) =>
    console.log(data);

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className="booking-form-wrapper l"
    >
      <div className="form-item">
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" />
      </div>

      <div className="form-item">
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time">
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>z
        </select>
      </div>

      <div className="form-item">
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" />
      </div>

      <div className="form-item">
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <div className="form-item">
        <Button type="submit">Reserve</Button>
      </div>
    </form>
  );
};

export default BookingForm;
