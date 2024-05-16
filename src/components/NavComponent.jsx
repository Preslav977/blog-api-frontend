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
            <span className={styles.navMainPage}>
              <span className={styles.whiteBackground}>Bul</span>
              <span className={styles.redBackground}>gar</span>
              <span className={styles.greenBackground}>ian</span>
            </span>
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
                <Link
                  data-testid="folklore"
                  to="/posts/category/66446821f1f4a04823a2bfe8"
                >
                  Folklore
                </Link>
                <Link
                  data-testid="folklore music"
                  to="/posts/category/6644689bf1f4a04823a2bffa"
                >
                  Folklore Music
                </Link>
                <Link
                  data-testid="culture"
                  to="/posts/category/66446958f1f4a04823a2c030"
                >
                  Culture
                </Link>
                <Link
                  data-testid="history"
                  to="/posts/category/6644691ff1f4a04823a2c01e"
                >
                  History
                </Link>
                <Link
                  data-testid="nature"
                  to="/posts/category/664468d2f1f4a04823a2c00c"
                >
                  Nature
                </Link>
                <Link
                  data-testid="traditions"
                  to="/posts/category/664469abf1f4a04823a2c042"
                >
                  Traditions
                </Link>
                <Link
                  data-testid="customs"
                  to="/posts/category/66446a59f1f4a04823a2c07d"
                >
                  Customs
                </Link>
              </nav>
              <div>
                {posts.slice(0, 2).map((post) => (
                  <article className={styles.navPostArticles} key={post._id}>
                    <figure className={styles.navPostImgContainer}>
                      <Link data-testid="navPostImg" to={`/posts/${post._id}`}>
                        <img
                          className={styles.navPostImg}
                          src={post.image_link}
                          alt=""
                        />
                      </Link>
                    </figure>
                    <div>
                      <div className={styles.navPostDescription}>
                        <Link
                          data-testid="postCategory"
                          to={`/posts/category/${post.category[0]._id}`}
                        >
                          {post.category[0].category}
                        </Link>
                        <Link to={`/posts/${post._id}`}>
                          <h2>{post.title}</h2>
                        </Link>
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
