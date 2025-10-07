import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { use, useEffect, useState } from "react";


const initialProducts = [
  {
    id: 1,
    name: "T-Shirt",
    price: 20,
    stock: 2000,
    supplier: "Gooten"
  },
  {
    id: 2,
    name: "Jacket",
    price: 100,
    stock: 400,
    supplier: "Gooten"
  },
  {
    id: 3,
    name: "Bomber",
    price: 250,
    stock: 600,
    supplier: "Zara"
  }
];
const initialCarts =[
]



export default function Root(){
    const [products, setProducts] = useState(initialProducts)
    const [cart, setCart] = useState(initialCarts)
    const [cartCount, setCartCount ] = useState(0)
    const [cartAmount, setCartAmount] = useState(0)

    function addToCart(productId,name,price, quantityAdded){
        setCart(prevCart => {
            const itemExists = prevCart.find(item =>item.id ===  productId)
            if (itemExists) {
                return prevCart.map((item,index) =>
                    item.id === productId 
                        ? {...item, cartQuantity : item.cartQuantity + quantityAdded}
                        : item
                )
            }
            else {
                return [...prevCart,{id : productId, name: name, price : price, cartQuantity : quantityAdded } ]
            }
    
        })
    }

    useEffect(() => {
        const totalCount = cart.reduce((sum,element)=>sum +element.cartQuantity,0)
        const totalAmount = cart.reduce((sum,element)=>sum + element.cartQuantity * element.price,0 )
        setCartCount(prev => totalCount)
        setCartAmount(prev => totalAmount)
    },[cart])

    return(
        <>
            <p>route test</p>
            <Navbar cartCount= {cartCount}/>
            <Outlet context={{products, setProducts,cart, addToCart,cartCount, setCartCount, cartAmount}}/>
        </>

    )
}