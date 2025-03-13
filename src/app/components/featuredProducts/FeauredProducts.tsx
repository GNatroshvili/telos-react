import React from "react";
import styles from "./FeaturedProducts.module.css";
import clsx from "clsx";

const FeauredProducts = () => {
  return (
    <>
      <section className={styles.featuredProductsSection}>
        <div className={styles.leftSideProducts}>
          <div className={styles.firstLineProducts}>
            <figure className={styles.ps5ImgWrapper}>
              <img className={styles.ps5Img} src="./Ps5.png" alt="ps-5" />
            </figure>
            <div className={styles.ps5DetailsWrapper}>
              <h2 className={styles.ps5Title}>Playstation 5</h2>
              <p
                className={clsx(
                  styles.featureCardDescription,
                  styles.marginTop16px
                )}
              >
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>
          <div className={styles.secondLineProducts}>
            <div className={styles.leftSecondLineProducts}>
              <figure className={styles.airpodsImgWrapper}>
                <img
                  className={styles.airpodsImg}
                  src="./Apple-Airpods.png"
                  alt="airpods"
                />
              </figure>
              <div className={styles.airpodsDetailsWrapper}>
                <h2 className={styles.airpodsTitle}>
                  Apple AirPods <span>Max</span>
                </h2>
                <p
                  className={clsx(
                    styles.featureCardDescription,
                    styles.marginTop8px
                  )}
                >
                  Computational audio. Listen, it's powerful
                </p>
              </div>
            </div>
            <div className={styles.rightSecondLineProducts}>
              <figure className={styles.visionImgWrapper}>
                <img
                  className={styles.visionProImg}
                  src="./Vision-Pro.png"
                  alt="vision-pro"
                />
              </figure>
              <div className={styles.visionProDetailsWrapper}>
                <h2 className={styles.visionProTitle}>
                  Apple Vision <span>Pro</span>
                </h2>
                <p
                  className={clsx(
                    styles.featureCardDescription,
                    styles.marginTop8px
                  )}
                >
                  An immersive way to experience entertainment
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightSideProducts}>
          <div className={styles.rightSideProductsContent}>
            <h2 className={styles.macbookTitle}>
              MacBook <span>Air</span>
            </h2>
            <p
              className={clsx(
                styles.featureCardDescription,
                styles.marginTop16px
              )}
            >
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <button className={styles.blackBtnLarge}>Shop Now</button>
          </div>
          <figure className={styles.rightSideProductImgWrapper}>
            <img
              className={styles.macImg}
              src="./MacBook-Pro.png"
              alt="macbook-air"
            />
          </figure>
        </div>
      </section>
      <section className={styles.featuredProductsSectionMobile}>
        <div
          className={clsx(styles.featureProductCard, styles.airpodsCardMobile)}
        >
          <img
            className={styles.airpodsImgMobile}
            src="./Airpods-img-mobile.png"
            alt="Airpods"
          />
          <h3
            className={clsx(
              styles.featureProductCardTitle,
              styles.airpodsCardMobileTitle
            )}
          >
            Apple AirPods <span>Max</span>
          </h3>
          <p
            className={clsx(styles.featureCardDescription, styles.marginTop8px)}
          >
            Computational audio. Listen, it's powerful
          </p>
        </div>
        <div
          className={clsx(
            styles.featureProductCard,
            styles.visionProCardMobile
          )}
        >
          <img
            className={styles.visionProImgMobile}
            src="./Vision-img-mobile.png"
            alt="Vision-Pro"
          />
          <h3
            className={clsx(
              styles.featureProductCardTitle,
              styles.visionProMobileTitle
            )}
          >
            Apple Vision <span>Pro</span>
          </h3>
          <p
            className={clsx(styles.featureCardDescription, styles.marginTop8px)}
          >
            An immersive way to experience entertainment
          </p>
        </div>
        <div className={clsx(styles.featureProductCard, styles.ps5CardMobile)}>
          <img
            className={styles.ps5ImgMobile}
            src="./Ps5-img-mobile.png"
            alt="Ps5"
          />
          <h3
            className={clsx(
              styles.featureProductCardTitle,
              styles.ps5MobileTitle
            )}
          >
            Playstation <span>5</span>
          </h3>
          <p
            className={clsx(styles.featureCardDescription, styles.marginTop8px)}
          >
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>
        <div
          className={clsx(styles.featureProductCard, styles.macbookCardMobile)}
        >
          <img
            className={styles.macbookImgMobile}
            src="./Macbook-img-mobile.png"
            alt="Macbook-Pro"
          />
          <h3
            className={clsx(
              styles.featureProductCardTitle,
              styles.macbookMobileTitle
            )}
          >
            <span>Macbook</span> Air
          </h3>
          <p
            className={clsx(
              styles.featureCardDescription,
              styles.marginTop16px
            )}
            id="bottom-margin-none"
          >
            The new 15‑inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <button className={styles.blackBtnLargeMobile}>Shop Now</button>
        </div>
      </section>
    </>
  );
};

export default FeauredProducts;
