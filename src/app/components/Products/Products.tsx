"use client";

import React from "react";
import styles from "./Product.module.css";
import clsx from "clsx";

const Products = () => {
  return (
    <section className={clsx(styles.productsSection, styles.container)}>
      <div className={styles.stepperWrapper}>
        <p className={styles.firstStep}>New Arrival</p>
        <p>Bestseller</p>
        <p className={styles.lastStep}>Featured Products</p>
      </div>
      <div className={styles.productsWrapper}>
        <div className={styles.productCard}>
          <div className={styles.heartWrapper}>
            <img className={styles.test} src="./Heart.svg" alt="heart" />
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

export default Products;
