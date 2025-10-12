import { useState } from "react";
import ShopContent from "../components/shopContent";
import { useOutletContext } from "react-router-dom";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


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
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                {products.map(product => (
                    <Grid key={product.id} size={{ xs: 2, sm: 4, md: 4 }}>
                        < ShopContent name={product.name} price={product.price} imageUrl = {product.imageUrl}  description={product.description} id ={product.id} addToCart ={addToCart} handleChange = {handleChange} addingCartFormData = {addingCartFormData}/>
                    </Grid>

                ))}

            </Grid>


        </>

    )
}