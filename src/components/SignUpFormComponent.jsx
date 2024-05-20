import styles from "./SignUpFormComponent.module.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import {
  UserContext,
  EmailContext,
  UsernameContext,
  FirstNameContext,
  LastNameContext,
  PasswordContext,
  ConfirmPasswordContext,
} from "../App";

function SignUpFormComponent() {
  const { userObject, setUserObject } = useContext(UserContext);

  const { email, setEmail } = useContext(EmailContext);

  const { username, setUsername } = useContext(UsernameContext);

  const { firstName, setFirstName } = useContext(FirstNameContext);

  const { lastName, setLastName } = useContext(LastNameContext);

  const { password, setPassword } = useContext(PasswordContext);

  const { confirmPassword, setConfirmPassword } = useContext(
    ConfirmPasswordContext,
  );

  const [disableSignUpBtn, setDisableSignUpBtn] = useState(true);

  // eslint-disable-next-line no-useless-escape
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  function enableButtonIfNoErrors() {
    if (email.match(emailRegex)) {
      setDisableSignUpBtn(false);
    }
  }

  function handleSubmit(e) {
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
        <form
          action="http://localhost:3000/user/signup"
          method="POST"
          onSubmit={handleSubmit}
          className={styles.signUpForm}
        >
          <div className={styles.formContentWrapper}>
            <label htmlFor="email">Email:</label>
            <input
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
          </div>
          <div className={styles.formContentWrapper}>
            <label htmlFor="username">Username:</label>
            <input
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
              type="password"
              name="confirm_password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {password !== confirmPassword && (
              <span className={styles.error}>Passwords don&apos;t match</span>
            )}
          </div>
          <div className={styles.signUpButtonContainer}>
            <Link to="/account/login">
              <button
                // disabled={disableSignUpBtn}
                // onClick={enableButtonIfNoErrors}
                className={styles.signUpButton}
                type="submit"
              >
                Sign Up
              </button>
            </Link>
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
