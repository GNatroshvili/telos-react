"use client";

import React from "react";
import styles from "./Product.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Product } from '../../types/types'
import { handleCartAction } from '../../utils/handleAddToCart'

type Props = {}

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/json/products.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json.products); // Access "products" array from JSON
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section className={clsx(styles.productsSection, styles.container)}>
      <div className={styles.stepperWrapper}>
        <p className={styles.firstStep}>New Arrival</p>
        <p>Bestseller</p>
        <p className={styles.lastStep}>Featured Products</p>
      </div>
      <div className={styles.productsWrapper}>
        {data.map((item: Product) => (
          <div key={item.id} className={styles.productCardContent}>
            <div className={styles.productCard}>
              <div className={styles.heartWrapper}>
                <img className={styles.test} src="./Heart.svg" alt="heart" />
              </div>
              <div className={styles.productCardContent}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <h3>${item.price}</h3>
                <button onClick={() => handleCartAction(item, 'add')}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
