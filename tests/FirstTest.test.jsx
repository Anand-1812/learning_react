// tests/FirstTest.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FirstTest from "../src/FirstTest.jsx";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<FirstTest />);
    expect(screen.getByRole("heading")).toHaveTextContent(/Our first test/i);
  });
});

