import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import routes from "../router/routes";
import NavComponent from "../components/NavComponent";
import App from "../App";

describe("Should render NavComponent", () => {
  it("should render NavComponent", () => {
    const routes = [
      {
        path: "/",
        element: <NavComponent />,
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    expect(screen.queryByText("Read").textContent).toMatch(/read/i);

    expect(screen.queryByText("Bulgarian").textContent).toMatch(/bulgarian/i);

    expect(screen.queryByRole("button")).toBeInTheDocument();
  });

  it("should render NavComponent navigation links", async () => {
    const routes = [
      {
        path: "/",
        element: <NavComponent />,
      },
    ];

    const router = createMemoryRouter(routes, {});

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
});
