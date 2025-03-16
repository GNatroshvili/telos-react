"use client";

import React from "react";
import styles from "./Products.module.css";
import clsx from "clsx";

const Products = () => {
  return (
    <>
      <div className={styles.dividerLine}></div>
      <section className={clsx(styles.shoppingCartSection, styles.container)}>
        <div className={styles.productListWrapper}>
          <div className={styles.sectionTitle}>
            <h2>Shopping Cart</h2>
          </div>
          <div className={styles.productsList}>
            <div className={styles.product}>
              <img
                className={styles.productImg}
                src="./Product-Image.png"
                alt="product-image"
              />
              <div className={styles.productContent}>
                <div className={styles.productInfo}>
                  <h3>Apple iPhone 14 Pro Max 128Gb Deep Purple</h3>
                  <p>#25139526913984</p>
                </div>
                <div className={styles.productSecondLine}>
                  <div className={styles.productQuantity}>
                    <button className={styles.decrease}>−</button>
                    <input type="text" defaultValue={1} />
                    <button className={styles.increase}>+</button>
                  </div>
                  <p className={styles.productPrice}>$1399</p>
                  <img
                    className={styles.deleteButton}
                    src="./Delete-Button.svg"
                    alt="delete-button"
                  />
                </div>
              </div>
            </div>
            <div className={styles.productDivider} />
            <div className={styles.product}>
              <img
                className={styles.productImg}
                src="./Product-Image.png"
                alt="product-image"
              />
              <div className={styles.productContent}>
                <div className={styles.productInfo}>
                  <h3>Apple iPhone 14 Pro Max 128Gb Deep Purple</h3>
                  <p>#25139526913984</p>
                </div>
                <div className={styles.productSecondLine}>
                  <div className={styles.productQuantity}>
                    <button className={styles.decrease}>−</button>
                    <input type="text" defaultValue={1} />
                    <button className={styles.increase}>+</button>
                  </div>
                  <p className={styles.productPrice}>$1399</p>
                  <img
                    className={styles.deleteButton}
                    src="./Delete-Button.svg"
                    alt="delete-button"
                  />
                </div>
              </div>
            </div>
            <div className={styles.productDivider} />
            <div className={styles.product}>
              <img
                className={styles.productImg}
                src="./Product-Image.png"
                alt="product-image"
              />
              <div className={styles.productContent}>
                <div className={styles.productInfo}>
                  <h3>Apple iPhone 14 Pro Max 128Gb Deep Purple</h3>
                  <p>#25139526913984</p>
                </div>
                <div className={styles.productSecondLine}>
                  <div className={styles.productQuantity}>
                    <button className={styles.decrease}>−</button>
                    <input type="text" defaultValue={1} />
                    <button className={styles.increase}>+</button>
                  </div>
                  <p className={styles.productPrice}>$1399</p>
                  <img
                    className={styles.deleteButton}
                    src="./Delete-Button.svg"
                    alt="delete-button"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.orderSummaryWrapper}>
          <div className={styles.orderSummary}>
            <h3>Order Summary</h3>
            <p className={styles.inputLabel}>Discount code / Promo code</p>
            <input
              className={styles.orderInput}
              id={styles.inputBorder}
              type="text"
              placeholder="Code"
            />
            <p className={clsx(styles.inputLabel, styles.paddingTop24px)}>
              Your bonus card number
            </p>
            <div className={styles.orderInput}>
              <input type="text" placeholder="Enter Card Number" />
              <button>Apply</button>
            </div>
            <div className={styles.totalWrapper}>
              <div className={styles.subtotal}>
                <p className={styles.blackStyleMedium}>Subtotal</p>
                <p className={styles.blackStyleLarge}>$2347</p>
              </div>
              <div className={styles.tax}>
                <p className={styles.grayStyleLarge}>Estimated Tax</p>
                <p className={styles.blackStyleLarge}>$50</p>
              </div>
              <div className={styles.shipping}>
                <p className={styles.grayStyleLarge}>
                  Estimated shipping & Handling
                </p>
                <p className={styles.blackStyleLarge}>$29</p>
              </div>
              <div className={styles.total}>
                <p className={styles.blackStyleMedium}>Total</p>
                <p className={styles.blackStyleLarge}>$2426</p>
              </div>
            </div>
            <button className={styles.checkoutBtn}>Checkout</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
