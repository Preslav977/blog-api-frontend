import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import routes from "../router/routes";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe } from "vitest";

describe("Should render FetchSinglePost component", () => {
  it("should render Loading while the API is loading", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/posts/66385bd721f139566ed13cb4"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    screen.debug();
  });
});
