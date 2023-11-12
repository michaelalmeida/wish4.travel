// create unit test for Dashboard component in src/Screen/Dashboard/Dashboard.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import { Dashboard } from "./Dashboard";

describe("Dashboard", () => {
  it("should render", () => {
    const { container } = render(
      <Dashboard
        user={{
          uid: "teste",
          username: "test",
          email: "michael@gmail.com",
          firstName: "Michael",
        }}
      />
    );
    expect(container).toBeInTheDocument();
  });
});
