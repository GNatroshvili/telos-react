"use client";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Products from "./components/Products";

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Header/>
      <Products/>
      <Footer/>
    </div>
  );
}
