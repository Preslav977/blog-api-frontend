import styles from "./FooterComponent.module.css";

function FooterComponent() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <h2>Improve your skills</h2>
          <h3>Get in the KNOW</h3>
          <p className={styles.footerInformation}>
            We at Bulgarian community have the utmost passion for preserving our
            traditions and customs and how pass it to the next generations. I
            appreciate taking a look in my blog
          </p>
        </div>
        <div className={styles.footerRightSide}>
          <div className={styles.footerColumnOne}>
            <h2>About Bulgarian</h2>
            <h3>About Us</h3>
            <h3>About Vision</h3>
          </div>
          <div className={styles.footerColumnTwo}>
            <h2>Contact Us</h2>
            <h3>Advertise</h3>
            <h3>Editors Column</h3>
            <h3>Email</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
