// shopContent.jsx


export default function ShopContent({name, price,imageUrl}) {
    return(
        <>
            <em>{name}</em>
            <p>$ {price}</p>
            <img
                src={imageUrl}
                //className="card-img-top"
                //alt={cardList[element].searchTerm}
                style={{ objectFit: "cover", height: "200px" }} // consistent image size
            />
        </>
    )
}