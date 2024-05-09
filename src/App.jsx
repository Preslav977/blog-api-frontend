import { useState, createContext } from "react";
import "./index.css";
import NavComponent from "./components/NavComponent";
import FetchPosts from "./api/FetchPosts";

export const PostContext = createContext(null);

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <PostContext.Provider value={[posts, setPosts]}>
        <NavComponent />
        <FetchPosts />
      </PostContext.Provider>
    </>
  );
}

export default App;
