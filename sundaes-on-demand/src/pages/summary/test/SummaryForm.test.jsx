import SummaryForm from "../SummaryForm";
import { render, fireEvent, screen } from "@testing-library/react";

test("Initial Conditions", async () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toBeChecked();
  //expect(checkbox.checked).toEqual(false);

  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  expect(confirmButton).toBeInTheDocument();
  expect(confirmButton).toBeDisabled();
});

test("Checkbox enables button on first click and disables on second click", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  fireEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  fireEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});
