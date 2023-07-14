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
    const countValue0 = Number(screen.getByTestId("count").textContent);
    expect(countValue0).toEqual(0);
    // after click happens
    fireEvent.click(incrementBtn);
    const countValue1 = Number(screen.getByTestId("count").textContent);
    expect(countValue1).toEqual(1);
    // after click happens twice
    fireEvent.click(incrementBtn);
    const countValue2 = Number(screen.getByTestId("count").textContent);
    expect(countValue2).toEqual(2);
  });


  it("count should decrement by 1 if the decrement button is clicked", () => {
    // we have to access the button so we can test it
    const { getByTestId, betByRole } = render(<Counter initialCount={0} />);
    const decrementBtn = screen.getByRole("button", { name: "Decrement" });
    // before click happens
    const countValue0 = Number(screen.getByTestId("count").textContent);
    expect(countValue0).toEqual(0);
    // after click happens
    fireEvent.click(decrementBtn);
    const countValue1 = Number(screen.getByTestId("count").textContent);
    expect(countValue1).toEqual(-1);
    // after click happens twice
    fireEvent.click(decrementBtn);
    const countValue2 = Number(screen.getByTestId("count").textContent);
    expect(countValue2).toEqual(-2);
  });

  

});
