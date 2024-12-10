import { z } from "zod";

export const bookingFormSchema = z.object({
  date: z.string().min(1, { message: "Reservation date is required" }),
  time: z.string(),
  numberOfGuests: z
    .number()
    .min(1, { message: "Minimum 1 guest is required." })
    .max(10, { message: "Maximum amount of guests are 10." }),
  occasion: z.string(),
});

export type BookingFormSchema = z.infer<typeof bookingFormSchema>;

export const FORM_DEFAULT_VALUES = {
  date: new Date().toJSON().slice(0, 10),
  time: "17:00",
  numberOfGuests: 1,
  occasion: "birthday",
};
