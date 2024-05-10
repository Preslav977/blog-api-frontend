import styles from "./PostComponent.module.css";
import PropTypes from "prop-types";

function PostComponent({
  postImgSrc,
  postImgAlt,
  postCategory,
  postTitle,
  postBody,
}) {
  return (
    <>
      <article className={styles.mainPagePostArticleContainer}>
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
      </article>
    </>
  );
}

PostComponent.propTypes = {
  postImgSrc: PropTypes.string,
  postImgAlt: PropTypes.string,
  postCategory: PropTypes.string,
  postTitle: PropTypes.string,
  postBody: PropTypes.string,
};

export default PostComponent;