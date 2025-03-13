import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Products from "./components/Products";



export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <Products/>
      <Footer/>
    </div>
  );
}
