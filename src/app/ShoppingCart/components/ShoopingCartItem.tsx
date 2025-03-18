"use client";

import React, { useEffect } from "react";
import styles from "./Products.module.css";
import clsx from "clsx";

import { ProductWithQuantity } from "../../types/types";
import { handleCartAction } from "../../utils/handleAddToCart";

type Props = {
  product: ProductWithQuantity;
  handleUpdatePage: () => void;
};

const ShoppingCartItem = ({ product, handleUpdatePage }: Props) => {
  useEffect(() => {
    console.log("test");
  });
  return (
    <>
      <div className={styles.product}>
        <img
          className={styles.productImg}
          src={product.image}
          alt={product.name}
        />
        <div className={styles.productContent}>
          <div className={styles.productInfo}>
            <h3>{product.name}</h3>
            <p>#{product.id}</p>
          </div>
          <div className={styles.productSecondLine}>
            <div className={styles.productQuantity}>
              <button
                className={styles.decrease}
                onClick={() => {
                  handleCartAction(product, "remove");
                  handleUpdatePage();
                }}
              >
                −
              </button>
              <input type="text" defaultValue={1} value={product.quantity} />
              <button
                className={styles.increase}
                onClick={() => {
                  handleCartAction(product, "add");
                  handleUpdatePage();
                }}
              >
                +
              </button>
            </div>
            <p className={styles.productPrice}>
              ${product.price * product.quantity}
            </p>
            <img
              className={styles.deleteButton}
              src="./Delete-Button.svg"
              alt="delete-button"
              onClick={() => {
                handleCartAction(product, "delete");
                handleUpdatePage();
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.productDivider} />
    </>
  );
};

export default ShoppingCartItem;
