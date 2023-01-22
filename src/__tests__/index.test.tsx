import { render, screen } from "@testing-library/react";
import IndexPage from "../pages";

describe("IndexPage", () => {
  it("renders a heading", () => {
    render(<IndexPage />);

    const heading = screen.getByRole("heading", {
      name: /Stylish Next App/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
