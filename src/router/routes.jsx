import App from "../App";
import FetchPosts from "../api/FetchPosts";

const routes = [
  {
    path: "/",
    element: <App />,
    Children: [{ index: true, element: <FetchPosts /> }],
  },
];

export default routes;
