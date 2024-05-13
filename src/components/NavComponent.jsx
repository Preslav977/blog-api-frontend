import styles from "./NavComponent.module.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../App";

function NavComponent() {
  const [navComponentDropDown, setNavComponentDropDrop] = useState(false);
  const [posts, setPosts] = useContext(PostContext);

  function toggleNavComponentDropDown() {
    setNavComponentDropDrop((navComponentDropDown) => !navComponentDropDown);
  }

  if (!navComponentDropDown) {
    return (
      <nav className={styles.navContainer}>
        <ul className={styles.navContent}>
          <li data-testid="read" onClick={toggleNavComponentDropDown}>
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
              <div>
                {posts.slice(0, 2).map((post) => (
                  <article className={styles.navPostArticles} key={post._id}>
                    <figure className={styles.navPostImgContainer}>
                      <Link to={`/posts/:${post._id}`}>
                        <img
                          className={styles.navPostImg}
                          src={post.image_link}
                          alt=""
                        />
                      </Link>
                    </figure>
                    <div>
                      <div className={styles.navPostDescription}>
                        <a data-testid="postCategory" href="#">
                          {post.category[0].category}
                        </a>
                        <h2>{post.title}</h2>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavComponent;
