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
});
