import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';
import Button from "@material-ui/core/Button";


function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket}, dispatch] = useStateValue();

    console.log(id,title,image,price,rating)

    const removeFromBasket = () =>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image}/>

        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>

            <p className="checkoutProduct__price">
                <h2 style={{fontSize:"15px", fontWeight:"normal"}}> ₹ &nbsp;    </h2>
                <strong>{price}</strong>
            </p>

            <div className="checkoutProduct__rating">
                {Array(rating).fill().map((_) =>(
                    <p> ⭐ </p>
                ) )}
            </div>
                <Button onClick={removeFromBasket} variant="contained" color="primary"> Remove from basket </Button>        
        </div>    
        </div>
    )
}

export default CheckoutProduct
