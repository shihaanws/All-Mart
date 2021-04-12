// import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

import './Product.css'
import { useStateValue } from './StateProvider';

function Product({id, title,image,price,rating}) {
    const history = useHistory();

    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            }
        })
    };

    return (
        <div className="product">
            <div className="product__info">
            <p className="titleclick" onClick={e=> history.push('/address')}>{title}</p>
            <p className="product__price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating).fill().map((_) =>(
                    <p> ⭐ </p>
                ) )}
            </div>
            </div>

          <img onClick={e=> history.push('/address')} className="imageclick" src={image}/>

          <Button type="button" onClick={addToBasket}  color="secondary" variant="contained">Add to Cart</Button>

            {/* <Button onClick={addToBasket}>Add to Cart< */}
            
        </div>
    )
}

export default Product
