import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import routes from "../router/routes";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { describe } from "vitest";

describe("Should render FetchSinglePost component", () => {
  it("should render Loading while the API is loading", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: [
        "",
        "/posts/664351780af56e5421b60547",
        // "/posts/category/:id",
        // "/posts/tag/:name",
      ],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    screen.debug();

    const apiLoading = screen.queryByText("Loading....");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByText("Loading...."));

    screen.debug();

    // const user = userEvent.setup();

    // const postCategory = screen.queryAllByTestId("postCategory");

    // await user.click(postCategory[0]);
  });
});
