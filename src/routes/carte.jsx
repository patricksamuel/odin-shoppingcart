import { useOutletContext } from "react-router-dom";
import CartDisplayPage from "../components/cartDisplayPage";




export default function Carte(){
    const {cart, setCart, cartAmount} = useOutletContext();
    return (
        <>
            <p>I will display cart here</p>
            {cart.map(cartItem =>(
                <div key = {cartItem.id}>
                    <CartDisplayPage name={cartItem.name} price={cartItem.price} quantity ={cartItem.cartQuantity}/>
                    <p>Total Amount {cartAmount}</p>
                </div>

            ))}
            
        </>
    )
}