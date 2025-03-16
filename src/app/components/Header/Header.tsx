"use client";

import clsx from "clsx";
import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.body}>
      <header className={clsx(styles.header, styles.container)}>
        <figure className={styles.logoWrapper}>
          <Link href="/">
            <img src="/Logo.svg" alt="cyber-logo"/>
          </Link>
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
          <Link href="/ShoppingCart">
            <img src="/Cart.svg" alt="cart" />
          </Link>
          <img src="/User.svg" alt="user" />
        </figure>
        <div className={styles.burgerMenu}>
          <span />
          <span />
          <span />
        </div>
      </header>
    </div>
  );
};

export default Header;
