import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import PostComponent from "../components/PostComponent";
import FetchPosts from "../api/FetchPosts";
import routes from "../router/routes";
import { describe, expect } from "vitest";

describe("Should render FetchPosts component", () => {
  it("should render Loading while the API fetches", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    screen.debug();

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));
  });
});
