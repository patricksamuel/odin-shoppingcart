export default function CartDisplayPage({name, price,quantity}){
    return (
        <>
            
            <em>{name}</em>
            <p>$ {price}</p>
            <p>{quantity} X</p>
        </>
    )
}