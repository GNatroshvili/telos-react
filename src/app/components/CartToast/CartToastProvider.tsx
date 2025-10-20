"use client";

import dynamic from "next/dynamic";

const CartToast = dynamic(() => import("./CartToast"), {
  ssr: false,
});

export default function CartToastProvider() {
  return <CartToast />;
}
