import Image from "next/image";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Products from "./components/Products";



export default function Home() {
  return (
    <div>
      <Header/>
      <Products/>
      <Footer/>
    </div>
  );
}
