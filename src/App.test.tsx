import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders headline", async () => {
    const { getByText } = render(<App />);
    expect(getByText(/cn news articles/i)).toBeInTheDocument();
    expect(getByText(/menu 1/i)).toBeInTheDocument();
    expect(getByText(/menu 2/i)).toBeInTheDocument();
  });
});
