import { useState, createContext } from "react";
import "./index.css";
import NavComponent from "./components/NavComponent";
import FooterComponent from "./components/FooterComponent";
import { Outlet } from "react-router-dom";

export const PostContext = createContext(null);

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <PostContext.Provider value={[posts, setPosts]}>
        <NavComponent />
        <Outlet />
      </PostContext.Provider>
      <FooterComponent />
    </>
  );
}

export default App;
