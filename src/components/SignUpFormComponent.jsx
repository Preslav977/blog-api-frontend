import styles from "./SignUpFormComponent.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

function SignUpFormComponent() {
  const { user, setUser } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
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
            />
          </div>
          <div className={styles.formContentWrapper}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              minLength={5}
              maxLength={30}
              required
            />
          </div>
          <div className={styles.formContentWrapper}>
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              name="first_name"
              minLength={5}
              maxLength={30}
              required
            />
          </div>
          <div className={styles.formContentWrapper}>
            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              name="last_name"
              minLength={5}
              maxLength={30}
              required
            />
          </div>
          <div className={styles.formContentWrapper}>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" minLength={8} required />
          </div>
          <div className={styles.formContentWrapper}>
            <label htmlFor="confirm_password">Confirm Password:</label>
            <input type="password" name="confirm_password" />
          </div>
          <div className={styles.signUpButtonContainer}>
            <button className={styles.signUpButton} type="submit">
              <Link to="/account/login">Sign Up</Link>
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
