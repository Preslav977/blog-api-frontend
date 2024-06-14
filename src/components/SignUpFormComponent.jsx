import styles from "./SignUpFormComponent.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {
  UserContext,
  EmailContext,
  UsernameContext,
  FirstNameContext,
  LastNameContext,
  PasswordContext,
  ConfirmPasswordContext,
} from "../App";
import { useNavigate } from "react-router-dom";

export const emailRegex =
  // eslint-disable-next-line no-useless-escape
  /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

function SignUpFormComponent() {
  const { userObject, setUserObject } = useContext(UserContext);

  const navigate = useNavigate();

  const { email, setEmail } = useContext(EmailContext);

  const { username, setUsername } = useContext(UsernameContext);

  const { firstName, setFirstName } = useContext(FirstNameContext);

  const { lastName, setLastName } = useContext(LastNameContext);

  const { password, setPassword } = useContext(PasswordContext);

  const { confirmPassword, setConfirmPassword } = useContext(
    ConfirmPasswordContext,
  );

  async function HandleSubmit(e) {
    e.preventDefault();

    const FormDataObject = new FormData(e.target);
    const userEmail = FormDataObject.get("email");
    const userUsername = FormDataObject.get("username");
    const userFirstName = FormDataObject.get("first_name");
    const userLastName = FormDataObject.get("last_name");
    const userPassword = FormDataObject.get("password");
    const userConfirmPassword = FormDataObject.get("confirm_password");

    const createUser = {
      ...userObject,
      email: userEmail,
      username: userUsername,
      first_name: userFirstName,
      last_name: userLastName,
      password: userPassword,
      confirm_password: userConfirmPassword,
    };
    setUserObject(createUser);

    try {
      const response = await fetch("http://localhost:3000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          username: userUsername,
          first_name: userFirstName,
          last_name: userLastName,
          password: userPassword,
          confirm_password: userConfirmPassword,
        }),
      });

      const result = await response.json();
      console.log(result);

      if (result.message === "Successfully created user.") {
        setEmail("");
        setUsername("");
        setFirstName("");
        setLastName("");
        setPassword("");
        setConfirmPassword("");
        navigate("/account/login");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.signUpFormWrapper}>
      <div className={styles.signUpFormContainer}>
        <div className={styles.signUpFormPolicyContent}>
          <h3 className={styles.signUpFormWelcome}>Welcome to Bulgarian!</h3>
          <p data-testid="signUpFormPrivacy" className={styles.privacyContent}>
            By continuing, you creating a Bulgarian account and hereby agree to
            our <a className={styles.signUpFormLink}>User Agreement</a> and{" "}
            <a className={styles.signUpFormLink}>Privacy Policy</a>
          </p>
        </div>
        <form onSubmit={HandleSubmit} className={styles.signUpForm}>
          <div className={styles.formContentWrapper}>
            <label htmlFor="email">Email:</label>
            <input
              role="input-email"
              type="email"
              name="email"
              minLength={5}
              maxLength={30}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!email.match(emailRegex) && (
              <span className={styles.error}>
                Email does not match required format
              </span>
            )}
            {/* {navigateToLogin.success === null && (
              <span className={styles.error}>
                Username with that email exists
              </span>
            )} */}
          </div>
          <div className={styles.formContentWrapper}>
            <label htmlFor="username">Username:</label>
            <input
              role="input-username"
              type="text"
              name="username"
              minLength={5}
              maxLength={30}
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {username.length < 5 && (
              <span className={styles.error}>
                Username must be between 5 and 30 characters.
              </span>
            )}
          </div>
          <div className={styles.formContentWrapper}>
            <label htmlFor="first_name">First Name:</label>
            <input
              role="input-first_name"
              type="text"
              name="first_name"
              minLength={5}
              maxLength={30}
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {firstName.length < 5 && (
              <span className={styles.error}>
                First Name must be between 5 and 30 characters.
              </span>
            )}
          </div>
          <div className={styles.formContentWrapper}>
            <label htmlFor="last_name">Last Name:</label>
            <input
              role="input-last_name"
              type="text"
              name="last_name"
              minLength={5}
              maxLength={30}
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {lastName.length < 5 && (
              <span className={styles.error}>
                Last Name must be between 5 and 30 characters.
              </span>
            )}
          </div>
          <div className={styles.formContentWrapper}>
            <label htmlFor="password">Password:</label>
            <input
              role="input-password"
              type="password"
              name="password"
              minLength={8}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password.length < 8 && (
              <span className={styles.error}>
                Password must be at least 8 characters long.
              </span>
            )}
          </div>
          <div className={styles.formContentWrapper}>
            <label htmlFor="confirm_password">Confirm Password:</label>
            <input
              role="input-confirm_password"
              type="password"
              name="confirm_password"
              minLength={8}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {password !== confirmPassword && (
              <span className={styles.error}>Passwords don&apos;t match</span>
            )}
          </div>
          <div className={styles.signUpButtonContainer}>
            <button className={styles.signUpButton} type="submit">
              Sign Up
            </button>
          </div>
          <p data-testid="signUpFormTextAndLink">
            Already have an account?{" "}
            <Link className={styles.signUpFormLink} to="/account/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpFormComponent;
