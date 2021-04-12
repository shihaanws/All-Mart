import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import "./Checkout.css";
import CurrencyFormat from "react-currency-format";

function Checkout() {

    const [{basket,user},dispatch] = useStateValue();

    return (


        <div className="checkout">
            <div className="checkout__left">
            {basket?.length === 0 ? (
                <div style={{backgroundColor:"white",display:"block", alignItems:"center"}}>
             <img style={{
                        display: "block",
                        backgroundColor:"white",
                        marginLeft: "auto",
                        marginRight: "auto",
                        
                        height:"500px",
                        width: "40%",
                        }} 
                        src="https://mykit.in/public/img/images/emptycart.svg"/>

                    <h1 style={{textAlign:"center", fontWeight:"lighter"}}>Cart Empty</h1>
                </div>
            ):(
                <div>

                    <h1 style={{textAlign:"center", fontWeight:"normal"}}>Products in your Cart</h1>


                    {basket.map((item) => {
                            console.log(item);
                    
                    return(
                        <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        />
                          );
                        }
                    )}
                </div>
            )
            }
            </div>

            
            {basket.length >0 &&(
                <div className="checkout__down">
                    <Subtotal />
                </div>

            )}
        </div>
    )
}

export default Checkout
