import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import PostComponent from "../components/PostComponent";

describe("Should render PostComponent", () => {
  it("should render the content of this component", () => {
    const routes = [
      {
        path: "/",
        element: <PostComponent />,
      },
    ];

    const router = createMemoryRouter(routes, {});

    render(<RouterProvider router={router} />);

    expect(screen.queryByRole("article")).toBeInTheDocument();

    expect(screen.queryByRole("img")).toBeInTheDocument();

    expect(screen.queryByTestId("postCategory")).toBeInTheDocument();

    expect(screen.queryByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("should render one post on the main page", () => {
    render(
      <PostComponent
        postImgSrc={
          "https://trekkingbg.com/-cms/wp-content/uploads/2012/11/photo_verybig_922138.jpg"
        }
        postCategory={"Folklore"}
        postTitle={"Bulgaria - Myths And Legends"}
        postBody={
          "Bulgarian folklore tradition keeps its beliefs into supernatural creatures towards which people have more poetic or generally pagan attitude. These are mythic"
        }
      />,
    );

    screen.debug();

    const postImg = screen.getByTestId("postImg");

    const postCategory = screen.queryByText("folklore");

    const postTitle = screen.queryByText("Bulgaria - Myths And Legends");

    const postBody = screen.queryByText(
      "Bulgarian folklore tradition keeps its beliefs into supernatural creatures towards which people have more poetic or generally pagan attitude. These are mythic",
    );

    expect(postCategory.textContent).toEqual("Folklore (Myths And Legends)");

    expect(postTitle.textContent).toEqual("Bulgaria - Myths And Legends");

    expect(postBody.textContent).toMatch(
      /bulgarian folklore tradition keeps its beliefs into supernatural creatures towards which people have more poetic or generally pagan attitude. these are mythic/i,
    );

    expect(postImg).toBeInTheDocument();
  });
});
