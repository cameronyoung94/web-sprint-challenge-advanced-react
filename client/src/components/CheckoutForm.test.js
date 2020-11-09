import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByText("Checkout");
    expect(header).toHaveTextContent(/checkout/i);
  });
  

  test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)

    const firstNameInput = screen.getByLabelText(/First Name:/i)

    fireEvent.change(firstNameInput, {target: {value: 'cam'}})

    expect(firstNameInput).toHaveValue('cam')

    const button = screen.getByRole("button", {name: /Checkout/i})
    fireEvent.click(button)

    const nameConfirm = await screen.findByText(/cam/i)
    expect(nameConfirm).toBeTruthy()
    expect(nameConfirm).toHaveTextContent(/cam/)

});