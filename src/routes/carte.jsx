import { useOutletContext } from "react-router-dom";
import CartDisplayPage from "../components/cartDisplayPage";




export default function Carte(){
    const {cart, addToCart, cartAmount} = useOutletContext();
    return (
        <>
            <p>I will display cart here</p>
            <table>
                <tbody>
                    {cart.map(cartItem =>(
                    <CartDisplayPage key = {cartItem.id} id = {cartItem.id} name={cartItem.name} price={cartItem.price} quantity ={cartItem.cartQuantity} addToCart={addToCart}/> 
                
                    ))}
                </tbody>
            </table>

            <p>Total Amount $ {cartAmount}</p>
        </>
    )
}