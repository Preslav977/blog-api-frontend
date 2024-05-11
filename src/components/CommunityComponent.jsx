import styles from "./CommunityComponent.module.css";

function CommunityComponent() {
  return (
    <>
      <section className={styles.mainCommunitySection}>
        <h4>The Bulgarian Community</h4>
        <p>Follow us on our socials</p>
        <div className={styles.socialMediaIconsContainer}>
          <img
            data-testid="img"
            className={styles.socialMediaIcon}
            src="./src/assets/twitter.svg"
            alt=""
          />
          <img
            data-testid="img"
            className={styles.socialMediaIcon}
            src="./src/assets/pinterest.svg"
            alt=""
          />
          <img
            data-testid="img"
            className={styles.socialMediaIcon}
            src="./src/assets/facebook.svg"
            alt=""
          />
          <img
            data-testid="img"
            className={styles.socialMediaIcon}
            src="./src/assets/youtube.svg"
            alt=""
          />
          <img
            data-testid="img"
            className={styles.socialMediaIcon}
            src="./src/assets/discord.svg"
            alt=""
          />
        </div>
      </section>
      <section className={styles.secondaryCommunitySection}>
        <div className={styles.gridImageContainer}>
          <div className={styles.imageOwner}>
            <a href="https://unsplash.com/@blooddrainer">@Anton Spasov</a>
          </div>
          <img
            data-testid="img"
            src="https://images.unsplash.com/photo-1633064256280-c011dba5ed94?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className={styles.gridImageContainer}>
          <div className={styles.imageOwner}>
            <a href="https://unsplash.com/@inedelchev">@Ivan Nedelchev</a>
          </div>{" "}
          <img
            data-testid="img"
            src="https://images.unsplash.com/photo-1594803294810-c860e5d29e07?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className={styles.gridImageContainer}>
          <div className={styles.imageOwner}>
            <a href="https://unsplash.com/@hrsahatchiev">@Hristo Sahatchiev</a>
          </div>
          <img
            data-testid="img"
            src="https://images.unsplash.com/photo-1622702968215-72155c9168fc?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className={styles.gridImageContainer}>
          <div className={styles.imageOwner}>
            <a href="https://unsplash.com/@blooddrainer">@Anton Spasov</a>
          </div>
          <img
            data-testid="img"
            src="https://images.unsplash.com/photo-1633210181101-774c588bc997?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className={styles.gridImageContainer}>
          <div className={styles.imageOwner}>
            <a href="https://unsplash.com/@george_ivanow">@George Ivanov</a>
          </div>
          <img
            data-testid="img"
            src="https://images.unsplash.com/photo-1621682372775-533449e550ed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default CommunityComponent;
