import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import NavComponent from "../components/NavComponent";
import App from "../App";
import routes from "../router/routes";

describe("Should render NavComponent", () => {
  it("should render NavComponent", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    expect(screen.queryByText("Read").textContent).toMatch(/read/i);

    expect(screen.queryByText("Bulgarian").textContent).toMatch(/bulgarian/i);

    expect(screen.queryByRole("button")).toBeInTheDocument();
  });

  it("should render NavComponent navigation links", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    const user = userEvent.setup();

    const readLink = screen.getByTestId("read");

    await user.click(readLink);

    expect(screen.queryByText("Topics").textContent).toMatch(/topics/i);

    expect(screen.queryByText("Folklore").textContent).toMatch(/folklore/i);
    expect(screen.queryByText("Folklore Music").textContent).toMatch(
      /Folklore Music/i,
    );
    expect(screen.queryByText("Traditions").textContent).toMatch(/traditions/i);
    expect(screen.queryByText("Customs").textContent).toMatch(/customs/i);
    expect(screen.queryByText("History").textContent).toMatch(/history/i);
  });

  it("should render post besides navigation links", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    screen.debug();

    const postCategory = screen.queryByText("folkore (myths and legends)");

    expect(postCategory).toBeInTheDocument();

    expect(
      screen.queryByText("Bulgaria - Myths And Legends").textContent,
    ).toMatch(/bulgaria - myths And legends/i);
  });
});
