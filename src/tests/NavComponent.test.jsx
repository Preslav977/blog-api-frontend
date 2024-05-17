import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import routes from "../router/routes";

describe("Should render NavComponent", () => {
  it("should render NavComponent", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    expect(screen.queryByText("Read").textContent).toMatch(/read/i);

    expect(screen.queryByText("Bul").textContent).toMatch(/bul/i);

    expect(screen.queryByText("gar").textContent).toMatch(/gar/i);

    expect(screen.queryByText("ian").textContent).toMatch(/ian/i);

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

    expect(screen.queryByText("Culture").textContent).toMatch(/culture/i);
    expect(screen.queryByText("History").textContent).toMatch(/history/i);
    expect(screen.queryByText("Nature").textContent).toMatch(/nature/i);
    expect(screen.queryByText("Traditions").textContent).toMatch(/traditions/i);
    expect(screen.queryByText("Customs").textContent).toMatch(/customs/i);
  });

  it("should render post besides navigation links", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    const user = userEvent.setup();

    const readLink = screen.getByTestId("read");

    await user.click(readLink);

    // screen.debug();

    const postCategory = screen.queryAllByTestId("postCategory");

    const postTitle = screen.queryAllByRole("heading", { level: 2 });

    expect(postCategory[0]).toBeInTheDocument();

    expect(postTitle[0]).toBeInTheDocument();
  });

  it("should navigate to Folklore link and render a post by category", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/posts/category/66446821f1f4a04823a2bfe8"],
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

    screen.debug();

    const folkloreLink = screen.queryByTestId("folklore");

    await user.click(folkloreLink);

    const postCategory = screen.queryAllByTestId("postCategory");

    expect(postCategory[0].textContent).toEqual("folklore");

    expect(
      screen.queryByText("Bulgaria - Myths and Legends").textContent,
    ).toMatch(/bulgaria - myths and legends/i);
  });

  it("should navigate to  Folklore Music link and render a post by category", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/posts/category/6644689bf1f4a04823a2bffa"],
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

    expect(postCategory[1].textContent).toMatch(/folklore music/i);

    const postTitle = screen.queryAllByText("Bulgarian Music Folklore");

    expect(postTitle[0].textContent).toMatch(/bulgarian music folklore/i);
  });

  it("should navigate to  Culture link and render a post by category", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/posts/category/66446958f1f4a04823a2c030"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    // screen.debug();

    const user = userEvent.setup();

    const readLink = screen.getByTestId("read");

    await user.click(readLink);

    const cultureLink = screen.queryByTestId("culture");

    await user.click(cultureLink);

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    screen.debug();

    const postCategory = screen.queryAllByTestId("culture");

    expect(postCategory[0].textContent).toMatch(/culture/i);

    // screen.debug();

    const postTitle = screen.queryAllByText("The orthodox icons of Bulgaria");

    const postTitleSecond = screen.queryAllByText(
      "Saint Sofia Church – the oldest operating church in Europe",
    );

    expect(postTitle[0].textContent).toMatch(/the orthodox icons of bulgaria/i);

    expect(postTitleSecond[0].textContent).toMatch(
      /saint sofia church – the oldest operating church in europe/i,
    );
  });

  it("should navigate to History link and render a post by category", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/posts/category/6644691ff1f4a04823a2c01e"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    // screen.debug();

    const user = userEvent.setup();

    const readLink = screen.getByTestId("read");

    await user.click(readLink);

    const historyLink = screen.queryAllByText("history");

    await user.click(historyLink[0]);

    // screen.debug();

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    const postCategory = screen.queryAllByText("history");

    expect(postCategory[0].textContent).toMatch(/history/i);

    // screen.debug();

    const postTitle = screen.queryAllByText(
      "Pleven Epopee 1877 Panorama, Pleven",
    );

    expect(postTitle[0].textContent).toMatch(
      /pleven epopee 1877 panorama, pleven/i,
    );

    const posTitleSecond = screen.queryAllByText("Tsar Simeon The Great");

    expect(posTitleSecond[0].textContent).toMatch(/tsar simeon the great/i);

    const posTitleThird = screen.queryAllByText(
      "Vasil Levski - unsurpassed in courage, defied an empire",
    );

    expect(posTitleThird[0].textContent).toMatch(
      /vasil levski - unsurpassed in courage, defied an empire/i,
    );
  });

  it("should navigate to Nature link and render a post by category", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/posts/category/664468d2f1f4a04823a2c00c"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    // screen.debug();

    const user = userEvent.setup();

    const readLink = screen.getByTestId("read");

    await user.click(readLink);

    const natureLink = screen.queryAllByText("nature");

    await user.click(natureLink[0]);

    screen.debug();

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    const postCategory = screen.queryAllByText("nature");

    expect(postCategory[0].textContent).toMatch(/nature/i);

    const postTitle = screen.queryAllByText("Pirin National Park");

    expect(postTitle[0].textContent).toMatch(/pirin national park/i);
  });

  it("should navigate to Traditions link and render a post by category", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/posts/category/664469abf1f4a04823a2c042"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    // screen.debug();

    const user = userEvent.setup();

    const readLink = screen.getByTestId("read");

    await user.click(readLink);

    const traditionsLink = screen.queryAllByText("traditions");

    await user.click(traditionsLink[0]);

    screen.debug();

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    const postCategory = screen.queryAllByText("traditions");

    expect(postCategory[0].textContent).toMatch(/traditions/i);

    const postTitle = screen.queryAllByText("The bulgarian feasts");

    expect(postTitle[0].textContent).toMatch(/the bulgarian feasts/i);
  });

  it("should navigate to Customs link and render a post by category", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/posts/category/66446a59f1f4a04823a2c07d"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    // screen.debug();

    const user = userEvent.setup();

    const readLink = screen.getByTestId("read");

    await user.click(readLink);

    const customsLink = screen.queryAllByText("customs");

    await user.click(customsLink[0]);

    screen.debug();

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    const postCategory = screen.queryAllByText("customs");

    expect(postCategory[0].textContent).toMatch(/customs/i);

    const postTitle = screen.queryAllByText("Traditional Customs of Bulgaria");

    expect(postTitle[0].textContent).toMatch(
      /traditional customs of bulgaria/i,
    );
  });

  it("should navigate to Post Bulgaria - Myths and Legends", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/posts/664467ebf1f4a04823a2bfe1"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    // screen.debug();

    const user = userEvent.setup();

    const readLink = screen.getByTestId("read");

    await user.click(readLink);

    const navPostImgLink = screen.queryAllByTestId("navPostImg");

    await user.click(navPostImgLink[0]);

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    screen.debug();

    const postCategory = screen.queryAllByText("folklore");

    expect(postCategory[0].textContent).toMatch(/folklore/i);

    const postTitle = screen.queryAllByText("Bulgaria - Myths and Legends");

    expect(postTitle[0].textContent).toMatch(/bulgaria - myths and legends/i);
  });

  it("should navigate to Post Bulgarian Music Folklore", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/posts/66446886f1f4a04823a2bff3"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    // screen.debug();

    const user = userEvent.setup();

    const readLink = screen.getByTestId("read");

    await user.click(readLink);

    const navPostImgLink = screen.queryAllByTestId("navPostImg");

    await user.click(navPostImgLink[0]);

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    screen.debug();

    const postCategory = screen.queryAllByText("folklore");

    expect(postCategory[0].textContent).toMatch(/folklore/i);

    const postTitle = screen.queryAllByText("Bulgarian Music Folklore");

    expect(postTitle[0].textContent).toMatch(/bulgarian music folklore/i);
  });

  it("should navigate to category folklore by clicking the category link of the post", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/posts/category/66446821f1f4a04823a2bfe8"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    // screen.debug();

    const user = userEvent.setup();

    const readLink = screen.getByTestId("read");

    await user.click(readLink);

    const postCategoryLink = screen.queryAllByTestId("postCategory");

    await user.click(postCategoryLink[0]);

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    screen.debug();

    const postCategory = screen.queryAllByText("folklore");

    expect(postCategory[0].textContent).toMatch(/folklore/i);

    const postTitle = screen.queryAllByText("Bulgaria - Myths and Legends");

    expect(postTitle[0].textContent).toMatch(/bulgaria - myths and legends/i);
  });

  it("should navigate to category folklore music by clicking the category link of the post", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/posts/category/66446821f1f4a04823a2bfe8"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    // screen.debug();

    const user = userEvent.setup();

    const readLink = screen.getByTestId("read");

    await user.click(readLink);

    const postCategoryLink = screen.queryAllByTestId("postCategory");

    await user.click(postCategoryLink[0]);

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    screen.debug();

    const postCategory = screen.queryAllByText("folklore music");

    expect(postCategory[0].textContent).toMatch(/folklore music/i);

    const postTitle = screen.queryAllByText("Bulgarian Music Folklore");

    expect(postTitle[0].textContent).toMatch(/bulgarian music folklore/i);
  });

  it("should navigate to LogInFormComponent", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["", "/account/login"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    const user = userEvent.setup();

    const logInButton = screen.queryByRole("button");

    await user.click(logInButton);

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

    expect(logInBtn[0].textContent).toMatch(/log in/i);
  });
});
