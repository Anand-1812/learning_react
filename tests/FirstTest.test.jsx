import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FirstTest from "../src/FirstTest.jsx";

describe("App component", () => {
  it("renders heading through button", () => {
    const { container } = render(<FirstTest />);
    expect(container).toMatchSnapshot();
  });

  it("renders correct heading after click", async () => {
    const user = userEvent.setup();

    render(<FirstTest />);
    const button = screen.getByRole("button", { name: /click me/i });

    await user.click(button);

    const heading = await screen.findByRole("heading");
    expect(heading).toHaveTextContent(/Heading Changes/i);
  });
});

