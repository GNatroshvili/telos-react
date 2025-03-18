"use client";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ShoppingCartWrapper from './components/ShoppingCartWrapper'
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Header/>
      <ShoppingCartWrapper />      
      <Footer/>
    </div>
  );
}
