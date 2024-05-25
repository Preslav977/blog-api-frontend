import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";
import styles from "./UserDashboardComponent.module.css";

function UserDashboardComponent() {
  const [userObject, setUserObject] = useContext(UserContext);

  console.log(userObject);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/user/${id}`, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server Error");
        }
        return response.json();
      })
      .then((response) => setUserObject(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  });

  if (loading) return <p data-testid="loading">Loading....</p>;
  if (error) return <p>A network error was encountered</p>;

  return <></>;
}

export default UserDashboardComponent;
