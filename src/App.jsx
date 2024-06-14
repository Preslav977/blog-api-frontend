import { useState, createContext } from "react";
import "./index.css";
import NavComponent from "./components/NavComponent";
import FooterComponent from "./components/FooterComponent";

import { Outlet } from "react-router-dom";

export const PostContext = createContext(null);

export const UserContext = createContext(null);

export const EmailContext = createContext(null);

export const UsernameContext = createContext(null);

export const FirstNameContext = createContext(null);

export const LastNameContext = createContext(null);

export const PasswordContext = createContext(null);

export const ConfirmPasswordContext = createContext(null);

export const IsUserLoggedContext = createContext(null);

export const LoggedInUserInformationContext = createContext(null);

function App() {
  const [posts, setPosts] = useState([]);

  const [userObject, setUserObject] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
  });

  const [loggedInUser, setLoggedInUser] = useState({});

  const [IsUserLogged, setIsUserLogged] = useState(false);

  const [email, setEmail] = useState("");

  const [username, setUsername] = useState("");

  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <LoggedInUserInformationContext.Provider
        value={[loggedInUser, setLoggedInUser]}
      >
        <IsUserLoggedContext.Provider value={[IsUserLogged, setIsUserLogged]}>
          <PostContext.Provider value={[posts, setPosts]}>
            <NavComponent />
            <UserContext.Provider value={{ userObject, setUserObject }}>
              <EmailContext.Provider value={{ email, setEmail }}>
                <UsernameContext.Provider value={{ username, setUsername }}>
                  <FirstNameContext.Provider
                    value={{ firstName, setFirstName }}
                  >
                    <LastNameContext.Provider value={{ lastName, setLastName }}>
                      <PasswordContext.Provider
                        value={{ password, setPassword }}
                      >
                        <ConfirmPasswordContext.Provider
                          value={{ confirmPassword, setConfirmPassword }}
                        >
                          <Outlet />
                        </ConfirmPasswordContext.Provider>
                      </PasswordContext.Provider>
                    </LastNameContext.Provider>
                  </FirstNameContext.Provider>
                </UsernameContext.Provider>
              </EmailContext.Provider>
            </UserContext.Provider>
          </PostContext.Provider>
        </IsUserLoggedContext.Provider>
      </LoggedInUserInformationContext.Provider>
      <FooterComponent />
    </>
  );
}

export default App;
