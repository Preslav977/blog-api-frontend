import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import PostComponent from "../components/PostComponent";
import routes from "../router/routes";
import { describe, expect } from "vitest";

describe("Should render FetchPosts component", () => {
  it("should render Loading while the API fetches", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    screen.debug();

    const apiLoading = screen.queryByTestId("loading");

    expect(apiLoading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));
  });

  it("should render one post on the main page", () => {
    render(
      <PostComponent
        postImgSrc={
          "https://trekkingbg.com/-cms/wp-content/uploads/2012/11/photo_verybig_922138.jpg"
        }
        postCategory={"Folkore (Myths And Legends)"}
        postTitle={"Bulgaria - Myths And Legends"}
        postBody={
          "Bulgarian folklore tradition keeps its beliefs into supernatural creatures towards which people have more poetic or generally pagan attitude. These are mythic"
        }
      />,
    );

    screen.debug();

    const postImg = screen.getByTestId("postImg");

    const postCategory = screen.queryByText("Folkore (Myths And Legends)");

    const postTitle = screen.queryByText("Bulgaria - Myths And Legends");

    const postBody = screen.queryByText(
      "Bulgarian folklore tradition keeps its beliefs into supernatural creatures towards which people have more poetic or generally pagan attitude. These are mythic",
    );

    expect(postCategory.textContent).toEqual("Folkore (Myths And Legends)");

    expect(postTitle.textContent).toEqual("Bulgaria - Myths And Legends");

    expect(postBody.textContent).toMatch(
      /bulgarian folklore tradition keeps its beliefs into supernatural creatures towards which people have more poetic or generally pagan attitude. these are mythic/i,
    );

    expect(postImg).toBeInTheDocument();
  });
});
