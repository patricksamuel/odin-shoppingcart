import { Link, useOutletContext } from "react-router-dom"
export default function Navbar({cartCount}){

    return (
        <>
            <h1>This is navbar</h1>
            <Link to="/">Home</Link>
            <br />
            <Link to="shop">Shop</Link>
            <br />
            <Link to="Cart">Cart</Link>
            <br />
            <p>{cartCount} in the cart</p>
        </>
    )

}