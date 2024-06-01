import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, expect } from "vitest";

import routes from "../router/routes";

describe("should render LogInFormComponent", () => {
  it("should render the content of this component", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/account/login"],
    });

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

    const logInBtn = screen.queryAllByRole("button");

    expect(logInBtn[1].textContent).toMatch(/log in/i);
  });
});
