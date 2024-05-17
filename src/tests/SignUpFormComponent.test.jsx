import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, expect } from "vitest";

import SignUpFormComponent from "../components/SignUpFormComponent";

describe("should render SignUpFormComponent", () => {
  it("should render the content of this component", () => {
    const routes = [
      {
        path: "/",
        element: <SignUpFormComponent />,
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    screen.debug();

    expect(screen.queryByText("Welcome to Bulgarian!").textContent).toMatch(
      /welcome to bulgarian!/i,
    );

    expect(screen.queryByTestId("signUpFormPrivacy").textContent).toEqual(
      "By continuing, you creating a Bulgarian account and hereby agree to our User Agreement and Privacy Policy",
    );

    expect(screen.queryByText("User Agreement").textContent).toMatch(
      /user agreement/i,
    );

    expect(screen.queryByText("Privacy Policy").textContent).toMatch(
      /privacy policy/i,
    );

    expect(screen.queryByText("Email:").textContent).toMatch(/email:/i);

    expect(screen.queryByText("Username:").textContent).toMatch(/username:/i);

    expect(screen.queryByText("First Name:").textContent).toMatch(
      /first name:/i,
    );

    expect(screen.queryByText("Last Name:").textContent).toMatch(/last name:/i);

    expect(screen.queryByText("Password:").textContent).toMatch(/password:/i);

    expect(screen.queryByText("Confirm Password:").textContent).toMatch(
      /confirm password:/i,
    );

    expect(screen.queryByRole("button").textContent).toMatch(/sign up/i);

    expect(screen.queryByTestId("signUpFormTextAndLink").textContent).toEqual(
      "Already have an account? Login",
    );
  });
});
