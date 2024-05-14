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
  // it("should render NavComponent", () => {
  //   const router = createMemoryRouter(routes, {
  //     initialEntries: ["/"],
  //   });

  //   render(<RouterProvider router={router} />);

  //   expect(screen.queryByText("Read").textContent).toMatch(/read/i);

  //   expect(screen.queryByText("Bulgarian").textContent).toMatch(/bulgarian/i);

  //   expect(screen.queryByRole("button")).toBeInTheDocument();
  // });

  // it("should render NavComponent navigation links", async () => {
  //   const router = createMemoryRouter(routes, {
  //     initialEntries: ["/"],
  //   });

  //   render(<RouterProvider router={router} />);

  //   const user = userEvent.setup();

  //   const readLink = screen.getByTestId("read");

  //   await user.click(readLink);

  //   expect(screen.queryByText("Topics").textContent).toMatch(/topics/i);

  //   expect(screen.queryByText("Folklore").textContent).toMatch(/folklore/i);
  //   expect(screen.queryByText("Folklore Music").textContent).toMatch(
  //     /Folklore Music/i,
  //   );
  //   expect(screen.queryByText("Traditions").textContent).toMatch(/traditions/i);
  //   expect(screen.queryByText("Customs").textContent).toMatch(/customs/i);
  //   expect(screen.queryByText("History").textContent).toMatch(/history/i);
  // });

  // it("should render post besides navigation links", async () => {
  //   const router = createMemoryRouter(routes, {
  //     initialEntries: ["/"],
  //   });

  //   render(<RouterProvider router={router} />);

  //   const apiLoading = screen.queryByTestId("loading");

  //   expect(apiLoading).toBeInTheDocument();

  //   await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

  //   const user = userEvent.setup();

  //   const readLink = screen.getByTestId("read");

  //   await user.click(readLink);

  //   screen.debug();

  //   const postCategory = screen.queryAllByTestId("postCategory");

  //   const postTitle = screen.queryAllByRole("heading", { level: 2 });

  //   expect(postCategory[0]).toBeInTheDocument();

  //   expect(postTitle[0]).toBeInTheDocument();
  // });

  it("should navigate to Folklore link and render a post by category", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/posts/category/66385c0321f139566ed13cba"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    screen.debug();

    const user = userEvent.setup();

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    const readLink = screen.getByTestId("read");

    await user.click(readLink);

    // screen.debug();

    const folkloreLink = screen.queryByTestId("folklore");

    await user.click(folkloreLink);

    const postCategory = screen.queryAllByTestId("postCategory");

    expect(postCategory[0].textContent).toEqual("folkore (myths and legends)");

    expect(
      screen.queryByText("Bulgaria - Myths And Legends").textContent,
    ).toMatch(/bulgaria - myths and legends/i);
  });

  it("should navigate to  Folklore Music link and render a post by category", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/posts/category/6638623421f139566ed13cda"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    // screen.debug();

    const user = userEvent.setup();

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    const readLink = screen.getByTestId("read");

    await user.click(readLink);

    // screen.debug();

    const folkloreMusicLink = screen.queryByTestId("folklore music");

    await user.click(folkloreMusicLink);

    const postCategory = screen.queryAllByTestId("postCategory");

    expect(postCategory[1].textContent).toMatch(/folkore music/i);

    const postTitle = screen.queryAllByText("Bulgarian Music Folkore");

    expect(postTitle[0].textContent).toMatch(/bulgarian music folkore/i);
  });

  it("should navigate to  Traditions link and render a post by category", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/posts/category/6638645f21f139566ed13d10"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    // screen.debug();

    const user = userEvent.setup();

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    const readLink = screen.getByTestId("read");

    await user.click(readLink);

    const traditionsLink = screen.queryAllByText("traditions");

    await user.click(traditionsLink[0]);

    // screen.debug();

    const postCategory = screen.queryAllByText("tradition");

    expect(postCategory[0].textContent).toMatch(/tradition/i);

    // screen.debug();

    const postTitle = screen.queryAllByText("Traditional Customs of Bulgaria");

    expect(postTitle[0].textContent).toMatch(
      /traditional customs of bulgaria/i,
    );
  });

  it("should navigate to Customs link and render a post by category", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "posts/category/663863df21f139566ed13cff"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    // screen.debug();

    const user = userEvent.setup();

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    const readLink = screen.getByTestId("read");

    await user.click(readLink);

    const customsLink = screen.queryAllByText("customs");

    await user.click(customsLink[0]);

    // screen.debug();

    const postCategory = screen.queryAllByText("culture");

    expect(postCategory[0].textContent).toMatch(/culture/i);

    // screen.debug();

    const postTitle = screen.queryAllByText("The orthodox icons of Bulgaria");

    expect(postTitle[0].textContent).toMatch(/the orthodox icons of bulgaria/i);
  });

  it("should navigate to History link and render a post by category", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "posts/category/6638632621f139566ed13ceb"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    // screen.debug();

    const user = userEvent.setup();

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    const readLink = screen.getByTestId("read");

    await user.click(readLink);

    const historyLink = screen.queryAllByText("history");

    await user.click(historyLink[0]);

    screen.debug();

    const postCategory = screen.queryAllByText("holidays");

    expect(postCategory[0].textContent).toMatch(/holidays/i);

    // screen.debug();

    const postTitle = screen.queryAllByText("The bulgarian feasts");

    expect(postTitle[0].textContent).toMatch(/the bulgarian feasts/i);
  });
});
