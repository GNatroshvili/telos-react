"use client";

import React from "react";
import styles from "./Promo.module.css";

const Promo = () => {
  return (
    <section className={styles.promoSection}>
      <div className={styles.promoSectionWrapper}>
        <h2 className={styles.promoSectionTitle}>
          Big Summer <span>Sale</span>
        </h2>
        <p className={styles.promoSectionDescription}>
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <button className={styles.whiteBtnLarge}>Shop Now</button>
      </div>
    </section>
  );
};

export default Promo;
