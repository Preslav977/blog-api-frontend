import styles from "./PostComponent.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PostComponent({
  postId,

  postImgSrc,
  postImgAlt,
  postCategory,
  postTitle,
  postBody,
}) {
  return (
    <>
      <article className={styles.mainPagePostArticleContainer}>
        <Link to={postId}>
          <img
            data-testid="postImg"
            className={styles.mainPagePostImg}
            src={postImgSrc}
            alt={postImgAlt}
          />
          <div className={styles.mainPagePostCategoryContainer}>
            <p data-testid="postCategory" className="postCategory">
              {postCategory}
            </p>
          </div>
          <div className={styles.mainPagePostBody}>
            <h2>{postTitle}</h2>
            <p className="postDescription">{postBody}</p>
          </div>
        </Link>
      </article>
    </>
  );
}

PostComponent.propTypes = {
  postId: PropTypes.string,
  postImgSrc: PropTypes.string,
  postImgAlt: PropTypes.string,
  postCategory: PropTypes.string,
  postTitle: PropTypes.string,
  postBody: PropTypes.string,
};

export default PostComponent;
