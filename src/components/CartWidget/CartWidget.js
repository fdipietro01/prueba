import React from "react";
import './CartWidget.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faShoppingBasket} from '@fortawesome/free-solid-svg-icons';

export const CartButton = ()=>{
    return(
        <>
            <div className="button">  <FontAwesomeIcon className="basket" icon={faShoppingBasket}/> Ir al carrito  </div>
        </>

    )
}