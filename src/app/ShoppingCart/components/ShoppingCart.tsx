"use client";

import { useEffect } from "react";
import { ProductWithQuantity } from "../../types/types";
import styles from "./Products.module.css";
import ShoppingCartItem from "./ShoopingCartItem";
import clsx from "clsx";

type Props = {
  products: ProductWithQuantity[];
  handleUpdatePage: () => void;
};

const ShoppingCart = ({ products, handleUpdatePage }: Props) => {
  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className={styles.shoppingCart}>
      <section className={clsx(styles.shoppingCartSection, styles.container)}>
        <div className={styles.productListWrapper}>
          <div className={styles.sectionTitle}>
            <h2>Shopping Cart</h2>
          </div>
          <div className={styles.productsList}>
            {products.length > 0 ? (
              products.map((product: ProductWithQuantity) => (
                <ShoppingCartItem
                  key={product.id}
                  handleUpdatePage={handleUpdatePage}
                  product={product}
                />
              ))
            ) : (
              <div className={styles.emptyCartWrapper}>
                <img
                  className={styles.emptyLogo}
                  src="./empty-shopping-cart.webp"
                  alt="emptyCartLogo"
                />
                <p className={styles.emptyCardTitle}>Your shopping cart is empty.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoppingCart;
