import styles from "./FetchPosts.module.css";
import { useState, useEffect, useContext } from "react";
import { PostContext } from "../App";
import PostComponent from "../components/PostComponent";
import AuthorComponent from "../components/AuthorComponent";
import FlexedPostComponent from "../components/FlexedPostComponent";
import FeaturedTags from "../components/FeaturedTagsComponent";

function FetchPosts() {
  const [posts, setPosts] = useContext(PostContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/posts", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server Error");
        }
        return response.json();
      })
      .then((response) => setPosts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p data-testid="loading">Loading....</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <main className={styles.mainContent}>
      <div className={styles.postContainerGrid}>
        {posts.map((post) => (
          <PostComponent
            key={post._id}
            postImgSrc={post.image_link}
            postCategory={post.category[0].category}
            postTitle={post.title}
            postBody={post.body}
          />
        ))}
      </div>
      <hr />
      <AuthorComponent />
      <hr />
      <section>
        {posts.map((post) => (
          <FlexedPostComponent
            key={post._id}
            postImgSrc={post.image_link}
            postCategory={post.category[0].category}
            postTitle={post.title}
            postBody={post.body}
          />
        ))}
      </section>
      <hr />
      <FeaturedTags />
    </main>
  );
}

export default FetchPosts;
