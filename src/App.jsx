import { useState, createContext } from "react";
import "./index.css";
import NavComponent from "./components/NavComponent";
import FetchPosts from "./api/FetchPosts";
import FooterComponent from "./components/FooterComponent";

export const PostContext = createContext(null);

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <PostContext.Provider value={[posts, setPosts]}>
        <NavComponent />
        <FetchPosts />
      </PostContext.Provider>
      <FooterComponent />
    </>
  );
}

export default App;
