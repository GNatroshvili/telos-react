'use client'
 import { ProductWithQuantity } from '../../types/types'
 import { useEffect, useState } from 'react'
 import Summary from '../../components/Summary/Summary'
 import ShoppingCart from './ShoppingCart'
 import styles from "./Products.module.css";
 import clsx from "clsx"
 
 type Props = {}
 
 function ShoppingCartWrapper({}: Props) {
   const [products, setProducts] = useState<ProductWithQuantity[]>([])
 
   const handleUpdatePage = () => {
     const storedProducts = localStorage.getItem('cart')
 
     if (storedProducts) {
       setProducts(JSON.parse(storedProducts))
     } else {
       setProducts([])
     }
   }
 
   useEffect(() => {
     handleUpdatePage()
   }, [])
 
   return (
     <div className={clsx(styles.container, styles.cartLayout)}>
       <ShoppingCart products={products} handleUpdatePage={handleUpdatePage} />
       <Summary products={products} />
     </div>
   )
 }
 
 export default ShoppingCartWrapper