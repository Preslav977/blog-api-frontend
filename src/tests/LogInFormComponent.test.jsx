import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, expect } from "vitest";
import LogInFormComponent from "../components/LogInFormComponent";

describe("should render LogInFormComponent", () => {
  it("should render the content of this component", () => {
    const routes = [
      {
        path: "/",
        element: <LogInFormComponent />,
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    screen.debug();

    expect(
      screen.queryByText("Welcome back to Bulgarian!").textContent,
    ).toMatch(/welcome back to bulgarian!/i);

    expect(screen.queryByTestId("logInFormPrivacy").textContent).toEqual(
      "By continuing, you are agree to our User Agreement and Privacy Policy.",
    );

    expect(screen.queryByText("Email:").textContent).toMatch(/email:/i);

    expect(screen.queryByText("Password:").textContent).toMatch(/password:/i);

    expect(screen.queryByTestId("logInFormTextAndLink").textContent).toEqual(
      "Don't an account yet? Sign Up Now",
    );

    expect(screen.queryByRole("button").textContent).toMatch(/log in/i);
  });
});
