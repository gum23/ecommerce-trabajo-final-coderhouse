import React from 'react';
import { Badge } from 'react-bootstrap';
import '../stylesheets/CartWidget.css'


export const CartWidget = () => {
    const contadorCarrito = 5;
    return (
        <div className="d-flex align-items-center container">
            <i className="bi bi-cart2"></i>
            <Badge bg="secondary">{contadorCarrito}</Badge>
        </div>
    )
}