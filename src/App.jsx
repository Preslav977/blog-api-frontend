import { useState, createContext } from "react";
import "./index.css";
import NavComponent from "./components/NavComponent";
import FooterComponent from "./components/FooterComponent";
import { Outlet } from "react-router-dom";

export const PostContext = createContext(null);

export const UserContext = createContext(null);

function App() {
  const [posts, setPosts] = useState([]);

  const [user, setUser] = useState({});

  return (
    <>
      <PostContext.Provider value={[posts, setPosts]}>
        <UserContext.Provider value={{ user, setUser }}>
          <NavComponent />
          <Outlet />
        </UserContext.Provider>
      </PostContext.Provider>

      <FooterComponent />
    </>
  );
}

export default App;
