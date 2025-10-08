export default function CartDisplayPage({id, name, price, quantity, addToCart}){
    return (
        <tr>
            <td><em>{name}</em></td>
            <td><p>$ {price}</p></td>
            <td><p>{quantity} X</p></td>
            <td>
                <button onClick={() => addToCart(id,name,price, 1)}>+1</button>
            </td>
            <td><button onClick={() => addToCart(id,name,price, -1)}>-1</button></td>
        </tr>

    )
}