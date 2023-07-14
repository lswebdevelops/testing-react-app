import Counter from "../Counter";
import { getByRole, render, screen, fireEvent } from "@testing-library/react";

describe(Counter, () => {
  it("counter displays correct initial count", () => {
    render(<Counter initialCount={0} />);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toBe(0);
  });

  it("count should increment by 1 if the increment button is clicked", () => {
    // we have to access the button so we can test it
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    // before click happens
    const countValue0 = Number(screen.getByTestId("count").textContent);
    expect(countValue0).toBe(0);
    // after click happens
    fireEvent.click(incrementBtn);
    const countValue1 = Number(screen.getByTestId("count").textContent);
    expect(countValue1).toBe(1);
    // after click happens twice
    fireEvent.click(incrementBtn);
    const countValue2 = Number(screen.getByTestId("count").textContent);
    expect(countValue2).toBe(2);
  });

  it("count should decrement by 1 if the decrement button is clicked", () => {
    // we have to access the button so we can test it
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const decrementBtn = screen.getByRole("button", { name: "Decrement" });
    // before click happens
    const countValue0 = Number(screen.getByTestId("count").textContent);
    expect(countValue0).toBe(0);
    // after click happens
    fireEvent.click(decrementBtn);
    const countValue1 = Number(screen.getByTestId("count").textContent);
    expect(countValue1).toBe(-1);
    // after click happens twice
    fireEvent.click(decrementBtn);
    const countValue2 = Number(screen.getByTestId("count").textContent);
    expect(countValue2).toBe(-2);
  });
  
  
  it("Count should be 0 if the restart button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    // before click:
    const restartBtn = screen.getByRole("button", { name: "Restart" });
    expect(Number(screen.getByTestId("count").textContent)).toEqual(50);
    // after click:
    fireEvent.click(restartBtn);
    expect(Number(screen.getByTestId("count").textContent)).toEqual(0);
  });


  it("Count should invert signs if Switch signs button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={5} />);
    // before click:
    const switchBtn = screen.getByRole("button", { name: "Switch Signs" });
    expect(Number(screen.getByTestId("count").textContent)).toBe(5);
    // after click:
    fireEvent.click(switchBtn);
    expect(Number(screen.getByTestId("count").textContent)).toBe(-5);
  });

});
