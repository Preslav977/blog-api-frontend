import styles from "./FlexedPostComponent.module.css";
import PropTypes from "prop-types";

function FlexedPostComponent({
  postImgSrc,
  postImgAlt,
  postCategory,
  postTitle,
  postBody,
}) {
  return (
    <>
      <article className={styles.mainPageFlexedPostContainer}>
        <img
          data-testid="postImg"
          className={styles.mainPageFlexedPostImg}
          src={postImgSrc}
          alt={postImgAlt}
        />
        <div className={styles.mainPageFlexedPostInformation}>
          <div>
            <p
              data-testid="postCategory"
              className={styles.mainPageFlexCategory}
            >
              {postCategory}
            </p>
          </div>
          <h2>{postTitle}</h2>
          <div className={styles.mainPageFlexedPostBody}>
            <p className={styles.postFlexedDescription}>{postBody}</p>
          </div>
        </div>
      </article>
    </>
  );
}

FlexedPostComponent.propTypes = {
  postImgSrc: PropTypes.string,
  postImgAlt: PropTypes.string,
  postCategory: PropTypes.string,
  postTitle: PropTypes.string,
  postBody: PropTypes.string,
};

export default FlexedPostComponent;
