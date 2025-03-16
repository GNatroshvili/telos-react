"use client";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/Hero";
import FeaturedProducts from "@/app/components/FeaturedProducts/FeaturedProducts";
import CategorySection from "./components/CategorySection/CategorySection";
import Products from "./components/Products/Products";
import Discounts from "./components/Discounts/Discounts";
import Promo from "./components/Promo/Promo";

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Header/>
      <Hero/>
      <FeaturedProducts/>
      <CategorySection/>
      <Products/>
      <Discounts/>
      <Promo/>
      <Footer/>
    </div>
  );
}
