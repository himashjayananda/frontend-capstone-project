import Button from "@/components/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  bookingFormSchema,
  BookingFormSchema,
  FORM_DEFAULT_VALUES,
} from "./booking-form.utils";
import "./booking-form.css";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormSchema>({
    defaultValues: FORM_DEFAULT_VALUES,
    resolver: zodResolver(bookingFormSchema),
  });

  const handleOnSubmit: SubmitHandler<BookingFormSchema> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className="booking-form-wrapper"
    >
      <div className="form-item">
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" {...register("date")} />
        {errors.date?.message && (
          <p className="text-danger">{errors.date.message}</p>
        )}
      </div>

      <div className="form-item">
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" {...register("time")}>
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
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          {...register("numberOfGuests")}
        />
        {errors.numberOfGuests?.message && (
          <p className="text-danger">{errors.numberOfGuests.message}</p>
        )}
      </div>

      <div className="form-item">
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" {...register("occasion")}>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </div>

      <div className="form-item">
        <Button type="submit">Reserve</Button>
      </div>
    </form>
  );
};

export default BookingForm;
