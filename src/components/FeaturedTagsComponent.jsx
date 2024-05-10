import styles from "./FeaturedTagsComponent.module.css";

function FeaturedTagsComponent() {
  return (
    <section className={styles.featuredTagsContainer}>
      <h4>Featured Tags</h4>
      <div className={styles.featuredTags}>
        <a href="">#Bulgaria</a>
        <a href="">#Folklore</a>
        <a href="">#History</a>
        <a href="">#Traditions</a>
        <a href="">#Customs</a>
      </div>
    </section>
  );
}

export default FeaturedTagsComponent;
