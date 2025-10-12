// shopContent.jsx
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ShopContent({name, price,imageUrl,description,id,addToCart,handleChange, addingCartFormData}) {
    return(
        <>


            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={imageUrl}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                                <p>$ {price}</p>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description}
                    </Typography>
                </CardContent>
                <CardActions>
                        <input
                            type="number"
                            name="quantityAdded"
                            placeholder="1"
                            onChange={handleChange}
                            required
                        />
                    <Button size="small">Share</Button>
                    <Button variant="contained" onClick={() => addToCart(id,name,price, Number( addingCartFormData.quantityAdded))}>Add</Button>
                </CardActions>
            </Card>

        </>
    )
}

