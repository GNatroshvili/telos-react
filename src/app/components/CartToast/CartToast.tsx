"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./CartToast.module.css";

type Props = {
  autoHideMs?: number;
};

export default function CartToast({ autoHideMs = 3000 }: Props) {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState<string>("");
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    type CartAddDetail = { id?: number; name?: string };
    const onAdded = (e: Event) => {
      // Attempt to read CustomEvent detail in a type-safe way
      const custom = e as CustomEvent<CartAddDetail>;
      const name = custom?.detail?.name || "Product";
      setMessage(`${name} added to cart`);
      setVisible(true);

      if (hideTimer.current) clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => setVisible(false), autoHideMs);
    };

    window.addEventListener("cart:add", onAdded as EventListener);
    return () => {
      window.removeEventListener("cart:add", onAdded as EventListener);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [autoHideMs]);

  if (!visible) return null;

  return (
    <div className={styles.toast} role="status" aria-live="polite">
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>✓</span>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Success!</div>
        <div className={styles.message}>{message}</div>
      </div>
      <button
        className={styles.closeBtn}
        aria-label="Close notification"
        onClick={() => setVisible(false)}
      >
        ×
      </button>
    </div>
  );
}
