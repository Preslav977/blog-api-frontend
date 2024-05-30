import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./FetchSinglePost.module.css";
import { Link } from "react-router-dom";
import { IsUserLoggedContext } from "../App";

function FetchSinglePost() {
  const [post, setPost] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [IsUserLogged, setIsUserLogged] = useContext(IsUserLoggedContext);

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
  }, [id]);

  if (loading) return <p data-testid="loading">Loading....</p>;
  if (error) return <p>A network error was encountered</p>;

  async function submitComment(e) {
    e.preventDefault();

    const FormDataObject = new FormData(e.target);

    const comment = FormDataObject.get("content");

    console.log(comment);

    const addCommentToPost = {
      ...post,
      content: comment,
    };

    setPost(addCommentToPost);

    try {
      const response = await fetch(
        `http://localhost:3000/posts/${id}/comments`,
        {
          method: "POST",
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content: comment }),
        },
      );
      const result = await response.json();

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <article className={styles.articleDetailedContainer}>
      <div className={styles.articleCategoryContainer}>
        <p className={styles.articleCategory}>
          <Link to={`/posts/category/${post.category[0]._id}`}>
            {post.category[0].category}
          </Link>
        </p>
      </div>
      <div className={styles.articleAuthorInformation}>
        <h2>{post.title}</h2>
        <div className={styles.articleAuthorAndDateContainer}>
          <p>{post.date}</p> | <span>by</span> <p>{post.author.first_name}</p>
          <p>{post.author.last_name}</p>
        </div>
      </div>
      <div className={styles.articleDetailedImageContainer}>
        <img
          data-testid="postImg"
          className={styles.articleImage}
          src={post.image_link}
          alt=""
        />
        <p>Photo by {post.image_owner}</p>
      </div>
      <div className={styles.articleDetailedDescriptionContainer}>
        <p data-testid="postBody">{post.body}</p>
      </div>

      <div className={styles.articleDetailedTagsContainer}>
        <h3>Tags</h3>
        <div className={styles.articleTags}>
          {post["tags"].map((postTags) => (
            <Link
              className={styles.articleCategory}
              key={postTags}
              to={`/posts/tag/${postTags}`}
            >
              #{postTags}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.articleCommentsContainer}>
        <h3>Comments</h3>
        {!IsUserLogged ? (
          <p className={styles.articleLogInUser}>
            You must be logged in to add a comment
          </p>
        ) : (
          <>
            <div>
              <p className={styles.articleLogInUser}>
                Comment on post &apos;{post.title}&apos;
              </p>
              <form onSubmit={submitComment}>
                <label htmlFor="content"></label>
                <textarea
                  className={styles.submitCommentTextArea}
                  name="content"
                  id=""
                  placeholder="Enter you comment here"
                  required
                ></textarea>
                <div className={styles.submitBtnCommentContainer}>
                  <button className={styles.submitBtnComment} type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
        {post.comments.map((postComments) => (
          <div key={postComments._id} className={styles.articleComment}>
            <p className={styles.articleUserNames}>
              {postComments.user.first_name} {postComments.user.last_name}
            </p>
            <p>{postComments.date}</p>
            <p className={styles.articleContent}>{postComments.content}</p>
            <div className={styles.articleLikeContainer}>
              <img
                className={styles.articleCommentLikeSvg}
                src="/like-comment.svg"
                alt=""
              />
              <p className={styles.articleLike}>{postComments.like}</p>
              {postComments.content ? (
                <>
                  <img
                    onClick={() => {
                      setPost(
                        ...post,
                        post.comments.filter(
                          (obj) => obj._id !== postComments._id,
                        ),
                      );
                    }}
                    className={styles.articleCommentLikeSvg}
                    src="/trashcan.svg"
                    alt=""
                  />
                  <p>Delete</p>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default FetchSinglePost;
