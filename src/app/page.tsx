import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/Hero";
import FeauredProducts from "./components/featuredProducts/FeauredProducts";
import CategorySection from "./components/CategorySection/CategorySection";
import Products from "./components/Products/Products";
import Discounts from "./components/Discounts/Discounts";
import Promo from "./components/Promo/Promo";


export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <Hero/>
      <FeauredProducts/>
      <CategorySection/>
      <Products/>
      <Discounts/>
      <Promo/>
      <Footer/>
    </div>
  );
}
