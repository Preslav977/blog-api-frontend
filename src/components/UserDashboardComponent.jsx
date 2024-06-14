import { useContext } from "react";
import { LoggedInUserInformationContext, IsUserLoggedContext } from "../App";
import styles from "./UserDashboardComponent.module.css";

function UserDashboardComponent() {
  const [IsUserLogged, setIsUserLogged] = useContext(IsUserLoggedContext);

  const [loggedInUser, setLoggedInUser] = useContext(
    LoggedInUserInformationContext,
  );

  console.log(loggedInUser);

  if (IsUserLogged) {
    return (
      <div className={styles.userDashboardWrapper}>
        <div className={styles.userDashboardContainer}>
          <div className={styles.greetingUserContainer}>
            <h2 className={styles.greetingUser}>
              Welcome, {loggedInUser.first_name}
            </h2>
            <p>Welcome to dashboard!</p>
            <p className={styles.userWarningParagraph}>
              Note: This page is under construction. Some features might not be
              available
            </p>
          </div>
          <h3 className={styles.userInformationHeader}> User Information</h3>
          <div className={styles.userDashboardContent}>
            <div className={styles.userDashboardLeftContent}>
              <div className={styles.userContent}>
                <p className={styles.userLabel}>First Name:</p>
                <p className={styles.userInformation}>
                  {loggedInUser.first_name}
                </p>
                <a className={styles.userLink}>Change First Name</a>
              </div>
              <div>
                <p className={styles.userLabel}>Email:</p>
                <p className={styles.userInformation}> {loggedInUser.email}</p>
                <a className={styles.userLink}>Change Email</a>
              </div>
              <div>
                <p className={styles.userLabel}>Verified Status:</p>
                {!loggedInUser.verified_status ? (
                  <p className={styles.userInformation}>Not Verified</p>
                ) : (
                  <p className={styles.userInformation}>Verified</p>
                )}
                <a className={styles.userLink}>Apply for Verification</a>
              </div>
            </div>
            <div className={styles.userDashboardRightContent}>
              <div>
                <p className={styles.userLabel}>Last Name:</p>
                <p className={styles.userInformation}>
                  {" "}
                  {loggedInUser.last_name}
                </p>
                <a className={styles.userLink}>Change Last Name</a>
              </div>
              <div>
                <p className={styles.userLabel}>Username:</p>
                <p className={styles.userInformation}>
                  {" "}
                  {loggedInUser.username}
                </p>
                <a className={styles.userLink}>Change Username</a>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
  return <p>You must be logged to see this page!</p>;
}

export default UserDashboardComponent;
