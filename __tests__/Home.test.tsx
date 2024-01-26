import { render, screen } from "@testing-library/react";

import Home from "../src/app/page";

test("renders docs element", () => {
  render(<Home />);
  const docElement = screen.getByText(/Docs/i);
  expect(docElement).toBeInTheDocument();
});
