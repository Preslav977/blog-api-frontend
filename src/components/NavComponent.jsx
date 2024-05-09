import styles from "./NavComponent.module.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

function NavComponent() {
  const [navComponentDropDown, setNavComponentDropDrop] = useState(false);

  function toggleNavComponentDropDown() {
    setNavComponentDropDrop((navComponentDropDown) => !navComponentDropDown);
  }

  if (!navComponentDropDown) {
    return (
      <nav className={styles.navContainer}>
        <ul className={styles.navContent}>
          <li onClick={toggleNavComponentDropDown}>
            Read
            <img
              className={styles.navSvgIcons}
              src="./src/assets/down-arrow.svg"
              alt="down arrow dropdown"
            />
          </li>
          <Link href="/">
            <span className={styles.navMainPage}>Bulgarian</span>
          </Link>
          <div className={styles.navRightSideContent}>
            <button className={styles.loginButton}>Log in</button>
            <img
              className={styles.navSvgIcons}
              src="./src/assets/search.svg"
              alt="search posts"
            />
          </div>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className={styles.navContainer}>
        <ul className={styles.navContent}>
          <li onClick={toggleNavComponentDropDown}>
            Read
            <img
              className={styles.navSvgIcons}
              src="./src/assets/up-arrow.svg"
              alt="up arrow dropdown"
            />
          </li>
          <Link href="/">
            <span className={styles.navMainPage}>Bulgarian</span>
          </Link>
          <div className={styles.navRightSideContent}>
            <button className={styles.loginButton}>Log in</button>
            <img
              className={styles.navSvgIcons}
              src="./src/assets/search.svg"
              alt="search posts"
            />
          </div>
        </ul>
        <div className={styles.navMenuWrapper}>
          <div className={styles.navMenuContainer}>
            <div className={styles.navMenuContent}>
              <nav className={styles.navigationLinks}>
                <h2>Topics</h2>
                <Link href="">Folklore</Link>
                <Link href="">Folklore Music</Link>
                <Link href="">Traditions</Link>
                <Link href="">Customs</Link>
                <Link href="">History</Link>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavComponent;
