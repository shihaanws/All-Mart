import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from "react-router-dom";

function Subtotal() {
    const history = useHistory();
    const [{basket},dispatch]= useStateValue();
    return (
        <div className="purchase">

            <div className="items">
                <CurrencyFormat
                    renderText={(value)=>(
                    <p>Subtotal ({basket.length}items) :  <strong>{`${value}`}</strong></p>
                    )}   

                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                    />
            </div>
                
            <div className="gop" >
                <h3 className="text" onClick={e=> history.push('/address')}>PROCEED TO PURCHASE</h3>
            </div>
            
        </div>
    )
}

export default Subtotal
