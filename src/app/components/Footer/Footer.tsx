import clsx from "clsx";
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <body className={styles.body}>
      <footer className={styles.footer}>
        <div className={clsx(styles.footerWrapper, styles.container)}>
          <div className={styles.descriptionWrapper}>
            <img src="./White-Logo.svg" alt="logo" />
            <p>
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than
            </p>
          </div>
          <div className={styles.footerOptionsWrapper}>
            <ul className={clsx(styles.firstOptionLine, styles.ul)}>
              <li className={styles.boldFooterOption}>Services</li>
              <li className={styles.ul}>Bonus program</li>
              <li className={styles.ul}>Gift cards</li>
              <li className={styles.ul}>Credit and payment</li>
              <li className={styles.ul}>Service contracts</li>
              <li className={styles.ul}>Non-cash account</li>
              <li className={styles.ul}>Payment</li>
            </ul>
            <ul className={styles.secondOptionLine}>
              <li className={clsx(styles.boldFooterOption, styles.ul)}>
                Assistance to the buyer
              </li>
              <li className={styles.ul}>Find an order</li>
              <li className={styles.ul}>Terms of delivery</li>
              <li className={styles.ul}>Exchange and return of goods</li>
              <li className={styles.ul}>Guarantee</li>
              <li className={styles.ul}>Frequently asked questions</li>
              <li className={styles.ul}>Terms of use of the site</li>
            </ul>
          </div>
        </div>
        <div className={clsx(styles.socialWrapper, styles.container)}>
          <img src="./Twitter.svg" alt="twitter-logo" />
          <img src="./Facebook.svg" alt="facebook-logo" />
          <img src="./Tiktok.svg" alt="tiktok-logo" />
          <img src="./Instagram.svg" alt="instagram-logo" />
        </div>
      </footer>
    </body>
  );
};

export default Footer;
