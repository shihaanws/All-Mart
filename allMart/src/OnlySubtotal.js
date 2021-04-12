import React from 'react'
import './OnlySubtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function OnlySubtotal() {
    // const history = useHistory();
    const [{basket},dispatch]= useStateValue();
    return (
        <div className="purchase1">

            <div className="items1">
                <CurrencyFormat
                    renderText={(value)=>(
                    <p>Subtotal ({basket.length} items) :  <strong>{`${value}`}</strong></p>
                    )}   

                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                    />
            </div>
                
            
        </div>
    )
}

export default OnlySubtotal
