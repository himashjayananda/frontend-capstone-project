import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import BookingForm from ".";

describe("BookingForm tests", () => {
  it("should render BookingForm component", () => {
    const { container } = render(<BookingForm />);

    expect(screen.getByText("Reserve")).toBeInTheDocument();
    expect(
      container.querySelector(".booking-form-wrapper")
    ).toBeInTheDocument();
  });
});
