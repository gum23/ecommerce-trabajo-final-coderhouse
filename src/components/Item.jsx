import { Card, Button, CardFooter } from "react-bootstrap";

import '../stylesheets/Item.css';
import { Link } from "react-router-dom";

export const MyItem = ({product}) => {
    
    return (
        <Card id="card">
            <Card.Img 
                variant="top"
                src={product.pictureUrl}
                className="image"
            />
            <Card.Body>
                <Card.Title>
                    {product.title}
                </Card.Title>
                <CardFooter className="buttonContainer">
                    <Link to={`/products/${product.id}`}>
                        <Button variant="primary">Ver</Button>
                    </Link>
                    <p className="price">$ {product.price}</p>
                </CardFooter>
            </Card.Body>
        </Card>
    )
}