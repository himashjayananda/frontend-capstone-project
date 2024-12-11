import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/button";
import { fetchAPI, submitAPI } from "@/mockApi";
import {
  bookingFormSchema,
  BookingFormSchema,
  FORM_DEFAULT_VALUES,
} from "./booking-form.utils";
import "./booking-form.css";
import BookingConfirmation from "./booking-confirmation/booking-confirmation";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BookingFormSchema>({
    defaultValues: FORM_DEFAULT_VALUES,
    resolver: zodResolver(bookingFormSchema),
  });
  const [bookingConfirmation, setBookingConfirmation] = useState<number | null>(
    null
  );

  const dateValue = watch("date");

  const handleOnSubmit: SubmitHandler<BookingFormSchema> = (data) => {
    const res = submitAPI(data);
    if (res) setBookingConfirmation(Date.now());
  };

  const availableTimes = useMemo(() => {
    const res = fetchAPI(new Date(dateValue));
    return res || [];
  }, [dateValue]);

  if (bookingConfirmation) {
    return <BookingConfirmation bookingConfirmation={bookingConfirmation} />;
  }

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
        <select
          id="res-time"
          {...register("time")}
          disabled={availableTimes.length < 0}
        >
          {availableTimes.length > 0 &&
            availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
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
