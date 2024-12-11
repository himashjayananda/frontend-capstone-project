import { describe, expect, it } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BookingForm from ".";

describe("BookingForm tests", () => {
  it("should render BookingForm component", () => {
    const { container } = render(<BookingForm />);

    expect(screen.getByText("Reserve")).toBeInTheDocument();
    expect(
      container.querySelector(".booking-form-wrapper")
    ).toBeInTheDocument();
  });

  it("should render BookingConfirmation component on Submit", async () => {
    render(<BookingForm />);

    fireEvent.click(screen.getByText("Reserve"));

    await waitFor(() => {
      expect(
        screen.getByText("Your Booking is Confirmed.")
      ).toBeInTheDocument();
    });
  });
});
