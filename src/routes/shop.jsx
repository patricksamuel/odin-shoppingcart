import { useState } from "react";
import ShopContent from "../components/shopContent";
import { useOutletContext } from "react-router-dom";

export default function Shop(){
    const { products, cart, addToCart, cartCount } = useOutletContext()
    const [addingCartFormData, setAddingCartFormData] = useState({
        quantityAdded : 1
    })

    function handleChange(e) {
        const {name,value} = e.target;
        setAddingCartFormData(prev => {
            return {...prev, [name] : value}
        })
    }

    return(
        <>
            {products.map(product => (
                
                <div key = {product.id}>
                    < ShopContent name={product.name} price={product.price} imageUrl = {product.imageUrl}  />
                    <input
                        type="number"
                        name="quantityAdded"
                        placeholder="1"
                        onChange={handleChange}
                        required
                    />
                    <button onClick={() => addToCart(product.id,product.name,product.price, Number( addingCartFormData.quantityAdded))}>Add</button>
                </div>
            ))}

        </>

    )
}