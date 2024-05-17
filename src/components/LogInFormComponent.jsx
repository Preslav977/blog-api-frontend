import styles from "./LogInFormComponent.module.css";
import { Link } from "react-router-dom";

function LogInFormComponent() {
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
        <form className={styles.logInForm} action="/user/login" method="POST">
          <div className={styles.formContentWrapper}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.formContentWrapper}>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" />
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
