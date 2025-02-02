import { render, screen } from "@testing-library/react";
import Home from "../Home";

describe("home pages", () => {
  test("links and buttons", () => {
    render(<Home />);
    const link = screen.getByRole("button", "a");
    expect(link).toBeInTheDocument();
  });

  test("show sections", () => {
    render(<Home />);
    const section = screen.getByRole("legend");
    expect(section).toBeInTheDocument();
  });
});
