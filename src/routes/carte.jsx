import { useOutletContext } from "react-router-dom";
import CartDisplayPage from "../components/cartDisplayPage";




export default function Carte(){
    const {cart, addToCart, cartAmount} = useOutletContext();
    return (
        <>
            <p>I will display cart here</p>
            {cart.map(cartItem =>(
                <div key = {cartItem.id}>
                    <CartDisplayPage name={cartItem.name} price={cartItem.price} quantity ={cartItem.cartQuantity}/>
                    <button onClick={() => addToCart(cartItem.id,cartItem.name,cartItem.price, 1)}>+1</button>
                    <button onClick={() => addToCart(cartItem.id,cartItem.name,cartItem.price, -1)}>-1</button>
                    
                </div>
                
            ))}
            <p>Total Amount $ {cartAmount}</p>
        </>
    )
}