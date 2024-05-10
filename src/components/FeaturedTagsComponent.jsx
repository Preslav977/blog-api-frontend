import styles from "./FeaturedTags.module.css";

function FeaturedTags() {
  return (
    <section className={styles.featuredTagsContainer}>
      <h4>Featured Tags</h4>
      <div className={styles.featuredTags}>
        <p>#Bulgaria</p>
        <p>#Folklore</p>
        <p>#History</p>
        <p>#Traditions</p>
        <p>#Customs</p>
      </div>
    </section>
  );
}

export default FeaturedTags;
