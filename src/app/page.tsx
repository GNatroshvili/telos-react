import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/Hero";
import FeauredProducts from "./components/featuredProducts/FeauredProducts";


export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <Hero/>
      <FeauredProducts/>
      <Footer/>
    </div>
  );
}
