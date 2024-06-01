import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, expect } from "vitest";
import routes from "../router/routes";

describe("should render SignUpFormComponent", () => {
  it("should render the content of this component", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/account/signup"],
    });

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
    const signUpBtn = screen.queryAllByRole("button");

    expect(signUpBtn[1].textContent).toMatch(/sign up/i);
    expect(screen.queryByTestId("signUpFormTextAndLink").textContent).toEqual(
      "Already have an account? Login",
    );
  });

  it("should render the content and the span errors", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/account/signup"],
    });

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

    expect(
      screen.queryByText("Email does not match required format").textContent,
    ).toMatch(/email does not match required format/i);

    expect(screen.queryByText("Username:").textContent).toMatch(/username:/i);

    expect(
      screen.queryByText("Username must be between 5 and 30 characters.")
        .textContent,
    ).toMatch(/username must be between 5 and 30 characters/i);

    expect(screen.queryByText("First Name:").textContent).toMatch(
      /first name:/i,
    );

    expect(
      screen.queryByText("First  Name must be between 5 and 30 characters.")
        .textContent,
    ).toMatch(/first name must be between 5 and 30 characters/i);

    expect(screen.queryByText("Last Name:").textContent).toMatch(/last name:/i);

    expect(
      screen.queryByText("Last Name must be between 5 and 30 characters.")
        .textContent,
    ).toMatch(/last name must be between 5 and 30 characters/i);

    expect(screen.queryByText("Password:").textContent).toMatch(/password:/i);

    expect(
      screen.queryByText("Password must be at least 8 characters long.")
        .textContent,
    ).toMatch(/password must be at least 8 characters long./i);

    expect(screen.queryByText("Confirm Password:").textContent).toMatch(
      /confirm password:/i,
    );

    const signUpBtn = screen.queryAllByRole("button");

    expect(signUpBtn[1].textContent).toMatch(/sign up/i);
    expect(screen.queryByTestId("signUpFormTextAndLink").textContent).toEqual(
      "Already have an account? Login",
    );
  });
});
