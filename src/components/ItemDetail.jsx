import { useState } from "react";


import '../stylesheets/ItemDetail.css';

export const ItemDetail = ({ product }) => {

    const [add, setAdd] = useState(0);

    function onAdd(count) {
        setAdd(count)
    }

    return (
        
        <div id="container">
            <img src={product.pictureUrl} className="container-image"/>
            <div className="container-description-price">
                <div className="container-description">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                </div>
                <div className="container-price">
                    <p>$ {product.price}</p>
                </div>
            </div>
        </div>
    )
}