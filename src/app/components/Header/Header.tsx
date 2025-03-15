import clsx from "clsx";
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <body className={styles.body}>
      <header className={clsx(styles.header, styles.container)}>
        <figure className={styles.logoWrapper}>
          <a href="./index.html">
            <img src="/Logo.svg" alt="cyber-logo" />
          </a>
        </figure>
        <div className={styles.searchWrapper}>
          <img
            src="/Search.svg"
            alt="search"
            className={styles.searchIcon}
          />
          <input type="text" placeholder="Search" className={styles.input} />
        </div>
        <div className={styles.navBarWrapper}>
          <ul className={`${styles.navBar} ${styles.ul}`}>
            <li>Home</li>
            <li className={styles.nonActiveNavBar}>About</li>
            <li className={styles.nonActiveNavBar}>Contact Us</li>
            <li className={styles.nonActiveNavBar}>Blog</li>
          </ul>
        </div>
        <figure className={styles.actionsWrapper}>
          <img src="/Favorites.svg" alt="favorites" />
          <a href="./shopping-cart.html" className={styles.shoppingCartBtn}>
            <img src="/Cart.svg" alt="cart" />
          </a>
          <img src="/User.svg" alt="user" />
        </figure>
        <div className={styles.burgerMenu}>
          <span />
          <span />
          <span />
        </div>
      </header>
    </body>
  );
};

export default Header;
