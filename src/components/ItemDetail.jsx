import { useState, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { ItemCount } from '../components/ItemCount';
import { CartContext } from "../contexts/CartContext";
import '../stylesheets/ItemDetail.css';

export const ItemDetail = ({ product }) => {

  const [added, setAdded] = useState(0);
  
  const {addItem} = useContext(CartContext);

  function onAdd(count) {
    setAdded(count);

    addItem(product, count);
  }

  return (
      
    <Card id="containerDetail">
      <Card.Img src={product.pictureUrl} className="image"/>
      <div className="description-price">
        <div className="container-description">
          <Card.Title className="title">{product.title}</Card.Title>
          <Card.Text className="description">{product.description}</Card.Text>
        </div>
        <div className="container-price">
          <p>$ {product.price}</p>
          {added == 0 && <ItemCount stock={product.stock} onAdd={onAdd}/>}
          {added >= 1 && 
            <Link to={"/cart"}>
              <Button id="terminar-compra" variant="dark" >Terminar Compra</Button>
            </Link>
          }
        </div>
      </div>
    </Card>
  )
}