import { Link } from "react-router-dom"
export default function Navbar(){
    return (
        <>
            <h1>This is navbar</h1>
            <Link to="/">Home</Link>
            <br />
            <Link to="shop">Shop</Link>
            <br />
            <Link to="Cart">Cart</Link>
        </>
    )

}