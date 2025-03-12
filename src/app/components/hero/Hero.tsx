import React from "react";
import styles from "./Hero.module.css";
import clsx from "clsx";

const Hero = () => {
  return (
    <body className={styles.body}>
      <section className={styles.heroSection}>
        <div className={clsx(styles.heroSectionWrapper, styles.container)}>
          <div className={styles.heroContentWrapper}>
            <p className={styles.heroFirstLine}>Pro.Beyond.</p>
            <h1 className={styles.heroTitle}>
              IPhone 14 <span>Pro</span>
            </h1>
            <p className={styles.heroThirdLine}>
              Created to change everything for the better. For everyone
            </p>
            <div className={styles.heroBtnWrapper}>
              <button className={styles.whiteBtnLarge}>Shop Now</button>
            </div>
          </div>
          <figure className={styles.heroImgWrapper}>
            <img
              src="./Hero-Img.png"
              alt="mobile-phone"
              className={styles.heroImg}
            />
          </figure>
        </div>
      </section>
    </body>
  );
};

export default Hero;
