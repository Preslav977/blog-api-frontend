import styles from "./FetchPosts.module.css";
import { useState, useEffect, useContext } from "react";
import { PostContext } from "../App";
import PostComponent from "../components/PostComponent";
import AuthorComponent from "../components/AuthorComponent";
import FlexedPostComponent from "../components/FlexedPostComponent";
import FeaturedTagsComponent from "../components/FeaturedTagsComponent";
import CommunityComponent from "../components/CommunityComponent";

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
  }, [setPosts]);

  if (loading) return <p data-testid="loading">Loading....</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <main className={styles.mainContent}>
      <div className={styles.postContainerGrid}>
        {posts.slice(0, 5).map((post) => (
          <PostComponent
            key={post._id}
            postImgPathId={`/posts/${post._id}`}
            postImgSrc={post.image_link}
            postCategoryPathId={`/posts/category/${post.category[0]._id}`}
            postCategory={post.category[0].category}
            postTitle={post.title}
            postBodyPathId={`/posts/${post._id}`}
            postBody={post.body}
          />
        ))}
      </div>
      <hr />
      <AuthorComponent />
      <hr />
      <section>
        {posts.slice(0, 5).map((post) => (
          <FlexedPostComponent
            key={post._id}
            postImgPathId={`/posts/${post._id}`}
            postImgSrc={post.image_link}
            postCategoryPathId={`/posts/category/${post.category[0]._id}`}
            postCategory={post.category[0].category}
            postTitlePathId={`/posts/${post._id}`}
            postTitle={post.title}
            postBodyPathId={`/posts/${post._id}`}
            postBody={post.body}
          />
        ))}
      </section>
      <FeaturedTagsComponent />
      <section className={styles.mainPageSecondaryPostsSection}>
        {posts.slice(5, 10).map((post) => (
          <FlexedPostComponent
            key={post._id}
            postImgPathId={`/posts/${post._id}`}
            postImgSrc={post.image_link}
            postCategoryPathId={`/posts/category/${post.category[0]._id}`}
            postCategory={post.category[0].category}
            postTitlePathId={`/posts/${post._id}`}
            postTitle={post.title}
            postBodyPathId={`/posts/${post._id}`}
            postBody={post.body}
          />
        ))}
      </section>
      <CommunityComponent />
    </main>
  );
}

export default FetchPosts;
