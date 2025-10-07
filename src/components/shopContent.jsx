// shopContent.jsx


export default function ShopContent({name, price}) {
    return(
        <>
            <em>{name}</em>
            <p>$ {price}</p>
        </>
    )
}