import Counter from "../Counter";
import { getByRole, render, screen, fireEvent } from "@testing-library/react";

describe(Counter, () => {
  it("counter displays correct initial count", () => {
    render(<Counter initialCount={0} />);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("count should increment by 1 if the increment button is clicked", () => {
    // we have to access the button so we can test it
    const { getByTestId, betByRole } = render(<Counter initialCount={0} />);
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    // before click happens
    const countValue1 = Number(screen.getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    // after click happens
    fireEvent.click(incrementBtn);
    const countValue2 = Number(screen.getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
    // after click happens twice
    fireEvent.click(incrementBtn);
    const countValue3 = Number(screen.getByTestId("count").textContent);
    expect(countValue3).toEqual(2);
  });
});
