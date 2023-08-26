// create unit test for Dashboard component in src/Screen/Dashboard/Dashboard.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import { Dashboard } from "./Dashboard";

describe("Dashboard", () => {
  it("should render", () => {
    const { container } = render(<Dashboard />);
    expect(container).toBeInTheDocument();
  });
});
