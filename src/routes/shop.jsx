import ShopContent from "../components/shopContent";
import { useOutletContext } from "react-router-dom";

export default function Shop(){
    const { products, cart, addToCart, cartCount } = useOutletContext()
    return(
        <>
            {products.map(product => (
                
                <div key = {product.id}>
                    < ShopContent name={product.name} price={product.price}  />
                    <button onClick={() => addToCart(product.id,product.name,product.price, 1)}>Add 1</button>
                </div>
            ))}

        </>

    )
}