import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import BookingPage from ".";

describe("BookingPage tests", () => {
  it("should render BookingPage component", () => {
    const { container } = render(<BookingPage />);

    expect(screen.getByText("Reserve a table")).toBeInTheDocument();
    expect(
      container.querySelector(".booking-form-wrapper")
    ).toBeInTheDocument();
  });
});
