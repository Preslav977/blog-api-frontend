import { useState, createContext } from "react";
import "./index.css";
import NavComponent from "./components/NavComponent";

export const PostContext = createContext(null);

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <PostContext.Provider value={[posts, setPosts]}>
        <NavComponent />
      </PostContext.Provider>
    </>
  );
}

export default App;
