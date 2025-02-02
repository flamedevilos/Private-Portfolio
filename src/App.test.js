import { render, screen } from "@testing-library/react";
import App from "./App";
import Load from "./components/Load";

describe("rendering App", () => {
  test("loading pages", async () => {
    render(<Load />);
    const loader = screen.getByTestId("loading");
    expect(loader).toBeInTheDocument();
  });

  test("renders without crashing", () => {
    render(<App />);
    const application = screen.getByTestId("application");
    expect(application).toBeInTheDocument();
  });
});
