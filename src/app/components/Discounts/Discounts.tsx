import React from "react";
import styles from "./Discounts.module.css";
import clsx from "clsx"; 

const Discounts = () => {
  return (
    <section className={clsx(styles.discountsSection, styles.container)}>
      <div className={styles.discountsSectionTitleWrapper}>
        <p>Discounts up to -50%</p>
      </div>
      <div className={styles.productsWrapper}>
        <div className={styles.productCard}>
          <div className={styles.heartWrapper}>
            <img src="./Heart.svg" alt="heart" />
          </div>
          <div className={styles.productCardContent}>
            <img src="./Iphone-14.png" alt="product-image" />
            <p>
              Apple iPhone 14 <span>Pro Max 128GB Deep Purple</span>
            </p>
            <h3>$900</h3>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.heartWrapper}>
            <img src="./Heart.svg" alt="heart" />
          </div>
          <div className={styles.productCardContent}>
            <img src="./Iphone-14.png" alt="product-image" />
            <p>Apple iPhone 14 Pro Max 128GB Deep Purple</p>
            <h3>$900</h3>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.heartWrapper}>
            <img src="./Heart.svg" alt="heart" />
          </div>
          <div className={styles.productCardContent}>
            <img src="./Iphone-14.png" alt="product-image" />
            <p>Apple iPhone 14 Pro Max 128GB Deep Purple</p>
            <h3>$900</h3>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.heartWrapper}>
            <img src="./Heart.svg" alt="heart" />
          </div>
          <div className={styles.productCardContent}>
            <img src="./Iphone-14.png" alt="product-image" />
            <p>Apple iPhone 14 Pro Max 128GB Deep Purple</p>
            <h3>$900</h3>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounts;
