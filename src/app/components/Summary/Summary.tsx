'use client'
 import { ProductWithQuantity } from '../../types/types'
 import styles from './Summary.module.css'
 import clsx from 'clsx'

 const Summary = ({ products }: { products: ProductWithQuantity[] }) => {
    const subtotal = products.reduce(
      (total, product) => total + product.quantity * product.price ,
      0
    )


    const tax = subtotal * 0.01;
    const shippingCost = subtotal * 0.02;

    return (
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
              <p className={styles.blackStyleLarge}>${subtotal}</p>
            </div>
            <div className={styles.tax}>
              <p className={styles.grayStyleLarge}>Estimated Tax</p>
              <p className={styles.blackStyleLarge}>${tax.toFixed(2)}</p>
            </div>
            <div className={styles.shipping}>
              <p className={styles.grayStyleLarge}>
                Estimated shipping & Handling
              </p>
              <p className={styles.blackStyleLarge}>${shippingCost.toFixed(2)}</p>
            </div>
            <div className={styles.total}>
              <p className={styles.blackStyleMedium}>Total</p>
              <p className={styles.blackStyleLarge}>${(subtotal + tax + shippingCost).toFixed(2)}</p>
            </div>
          </div>
          <button className={styles.checkoutBtn}>Checkout</button>
        </div>
      </div>
    )
}

export default Summary;