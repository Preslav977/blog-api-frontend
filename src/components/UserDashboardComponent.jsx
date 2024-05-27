import { useState, useEffect, useContext } from "react";
import { LoggedInUserInformationContext } from "../App";
import styles from "./UserDashboardComponent.module.css";

function UserDashboardComponent() {
  const [loggedInUser, setLoggedInUser] = useContext(
    LoggedInUserInformationContext,
  );

  console.log(loggedInUser);

  return <></>;
}

export default UserDashboardComponent;
