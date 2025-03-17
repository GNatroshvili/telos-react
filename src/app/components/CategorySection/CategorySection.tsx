"use client";

import React from "react";
import styles from "./CategorySection.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";

const CategorySection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/json/category.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json); // Access "products" array from JSON
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section className={styles.categorySection}>
      <div className={clsx(styles.categorySectionWrapper, styles.container)}>
        <div className={styles.categorySectionTitle}>
          <h3>Browse By Category</h3>
          <figure className={styles.categorySectionArrowsWrapper}>
            <img src="./Left-Arrow.svg" alt="left-arrow" />
            <img src="./Right-Arrow.svg" alt="right-arrow" />
          </figure>
        </div>
        <div className={styles.categoryCardsWrapper}>
          {data.map((item: any) => (
            <div key={item.id} className={styles.categoryCard}>
              <img src={item.image} alt="Phones" />
              <p>{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
