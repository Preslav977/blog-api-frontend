import { useState, useEffect, useContext } from "react";
import { PostContext } from "../App";
import { useParams } from "react-router-dom";
import styles from "./FetchSinglePost.module.css";

function FetchSinglePost() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server Error");
        }
        return response.json();
      })
      .then((response) => setPost(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [id, setPost]);

  if (loading) return <p data-testid="loading">Loading....</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <article className={styles.articleDetailedContainer}>
      <div className={styles.articleCategoryContainer}>
        <p className={styles.articleCategory}>Folklore</p>
      </div>
      <div className={styles.articleAuthorInformation}>
        <h2>{post.title}</h2>
        <div className={styles.articleAuthorAndDateContainer}>
          <p>{post.date}</p> | <span>by</span> <p>{post.author.first_name}</p>
          <p>{post.author.last_name}</p>
        </div>
      </div>
      <div className={styles.articleDetailedImageContainer}>
        <img className={styles.articleImage} src={post.image_link} alt="" />
        <p>Photo by Trekking Bulgaria</p>
      </div>
      <div className={styles.articleDetailedDescriptionContainer}>
        <p>{post.body}</p>
      </div>

      <div className={styles.articleDetailedTagsContainer}>
        <h3>Tags</h3>
        <div className={styles.articleTags}>
          {post["tags"].map((obj) => (
            <p key={obj}>#{obj}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

export default FetchSinglePost;
