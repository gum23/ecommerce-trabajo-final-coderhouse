import React from 'react';
import { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../stylesheets/CartWidget.css';
import { CartContext } from '../contexts/CartContext';

export const CartWidget = () => {
  const {items} = useContext(CartContext) ;
  return(
    <div className='d-flex align-items-center container'>
      <Link to={"/cart"}>
        <i className="bi bi-cart2"></i>
      </Link>
      <Badge bg="secondary">{items.length}</Badge>
    </div>
  )
}