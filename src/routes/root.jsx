import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { useState } from "react";


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
    {
    id: 1,
    name: "T-Shirt",
    price: 20,
    cartQuantity : 2
    }
]



export default function Root(){
    const [products, setProducts] = useState(initialProducts)
    const [cart, setCart] = useState(initialCarts)
    const [cartCount, setCartCount ] = useState(0)

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

    return(
        <>
            <p>route test</p>
            <Navbar />
            <Outlet context={{products, setProducts,cart, addToCart,cartCount, setCartCount}}/>
        </>

    )
}