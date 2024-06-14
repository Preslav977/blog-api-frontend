import styles from "./LogInFormComponent.module.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { EmailContext } from "../App";
import { PasswordContext } from "../App";
import { emailRegex } from "./SignUpFormComponent";
import { IsUserLoggedContext, LoggedInUserInformationContext } from "../App";
import { useNavigate } from "react-router-dom";

function LogInFormComponent() {
  const [IsUserLogged, setIsUserLogged] = useContext(IsUserLoggedContext);

  const { email, setEmail } = useContext(EmailContext);

  const { password, setPassword } = useContext(PasswordContext);

  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [loggedInUser, setLoggedInUser] = useContext(
    LoggedInUserInformationContext,
  );

  // useEffect(() => {
  //   fetch("http://localhost:3000/user", {
  //     headers: {
  //       Authorization: localStorage.getItem("token"),
  //     },
  //     mode: "cors",
  //   })
  //     .then((response) => {
  //       if (response.status >= 400) {
  //         throw new Error("Server Error");
  //       }
  //       return response.json();
  //     })
  //     .then((response) => setLoggedInUser(response))
  //     .catch((error) => setError(error))
  //     .finally(() => setLoading(false));
  // }, [setLoggedInUser]);

  // if (loading) return <p data-testid="loading">Loading....</p>;
  // if (error) return <p>A network error was encountered</p>;

  async function HandleLogin(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.status === 401) {
        setError("Wrong credentials");
      } else {
        const result = await response.json();

        const bearerToken = ["Bearer", result.token];

        localStorage.setItem("token", JSON.stringify(bearerToken));

        navigate("/");

        setIsUserLogged(true);

        const responseFetchUser = await fetch("http://localhost:3000/user", {
          mode: "cors",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });

        const loggedInUser = await responseFetchUser.json();

        const obj = {
          ...loggedInUser,
          loggedInUser,
        };

        setLoggedInUser(obj);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.logInFormWrapper}>
      <div className={styles.logInFormContainer}>
        <div className={styles.logInFormPolicyContent}>
          <h3 className={styles.logInFormWelcome}>
            Welcome back to Bulgarian!
          </h3>
          <p data-testid="logInFormPrivacy">
            By continuing, you are agree to our{" "}
            <a className={styles.logInFormLink}>User Agreement</a> and{" "}
            <a className={styles.logInFormLink}>Privacy Policy.</a>
          </p>
        </div>
        <form className={styles.logInForm} onSubmit={HandleLogin}>
          <div className={styles.formContentWrapper}>
            <label htmlFor="email">Email:</label>
            <input
              role="input-email"
              type="email"
              name="email"
              minLength={5}
              maxLength={30}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {!email.match(emailRegex) && (
              <span className={styles.error}>
                Email does not match required format
              </span>
            )}
            {error === "Wrong credentials" && (
              <span className={styles.error}>{error}</span>
            )}
          </div>
          <div className={styles.formContentWrapper}>
            <label htmlFor="password">Password:</label>
            <input
              role="input-password"
              type="password"
              name="password"
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {password.length < 8 && (
              <span className={styles.error}>
                Password must be at least 8 characters long.
              </span>
            )}
            {error === "Unauthorized" && (
              <span className={styles.error}>Unauthorized</span>
            )}
          </div>
          <div className={styles.logInButtonContainer}>
            <button className={styles.logInButton}>Log in</button>
          </div>
          <p data-testid="logInFormTextAndLink">
            Don&apos;t an account yet?{" "}
            <Link className={styles.logInFormLink} to="/account/signup">
              Sign Up Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LogInFormComponent;
