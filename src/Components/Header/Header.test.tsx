import { render, screen } from "@testing-library/react";
import React from "react";
import { Header } from "./Header";

test("<Header />", () => {
  test("loads and displays greeting", () => {
    const name = "test";

    render(<Header name={name} />);
    const testHeader = screen.getByRole("heading", { name: /test/i });

    expect(testHeader).toBeInTheDocument();
  });
});
