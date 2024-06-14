import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, expect } from "vitest";
import routes from "../router/routes";
import userEvent from "@testing-library/user-event";

import UserDashboardComponent from "../components/UserDashboardComponent";

// describe("should render UserDashBoardComponent", () => {
//   it("should render the content of this component", async () => {
//     const router = createMemoryRouter(routes, {
//       initialEntries: ["/account/"],
//       initialIndex: 0,
//     });

//     render(<RouterProvider router={router} />);

//     const user = userEvent.setup();

//     await user.type(screen.getByRole("input-email"), "newuser@test.com");

//     expect(screen.getByRole("input-email")).toHaveValue("newuser@test.com");

//     expect(
//       screen.queryByText("Email does not match required format"),
//     ).not.toBeInTheDocument();

//     await user.type(screen.getByRole("input-password"), "12345678");

//     expect(screen.getByRole("input-password")).toHaveValue("12345678");

//     expect(
//       screen.queryByText("Password must be at least 8 characters long."),
//     ).not.toBeInTheDocument();

//     const logInBtn = screen.queryAllByRole("button", { name: "Log in" });

//     await user.click(logInBtn[1]);

//     screen.debug();

//     expect(screen.queryByText("Welcome,").textContent).toMatch(/welcome,/i);

//     expect(screen.queryByText("Welcome to dashboard!").textContent).toMatch(
//       /welcome to dashboard!/i,
//     );

//     expect(
//       screen.queryByText(
//         "Note: This page is under construction. Some features might not be available",
//       ).textContent,
//     ).toMatch(
//       /note: this page is under construction. some features might not be available/i,
//     );

//     expect(screen.queryByText("User Information").textContent).toMatch(
//       /user information/i,
//     );

//     expect(screen.queryByText("First Name:").textContent).toMatch(
//       /first name:/i,
//     );

//     expect(screen.queryByText("Change First Name").textContent).toMatch(
//       /change first name/i,
//     );

//     expect(screen.queryByText("Email:").textContent).toMatch(/email:/i);

//     expect(screen.queryByText("Change Email").textContent).toMatch(
//       /change email/i,
//     );

//     expect(screen.queryByText("Verified Status:").textContent).toMatch(
//       /verified status:/i,
//     );

//     expect(screen.queryByText("Not Verified").textContent).toMatch(
//       /not verified/i,
//     );

//     expect(screen.queryByText("Apply for Verification").textContent).toMatch(
//       /apply for verification/i,
//     );

//     expect(screen.queryByText("Last Name:").textContent).toMatch(/last name:/i);

//     expect(screen.queryByText("Change Last Name").textContent).toMatch(
//       /change last name/i,
//     );

//     expect(screen.queryByText("Username:").textContent).toMatch(/username:/i);

//     expect(screen.queryByText("Change Username").textContent).toMatch(
//       /change username/i,
//     );
//   });
// });
