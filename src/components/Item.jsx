import { Card, Button, CardFooter } from "react-bootstrap";
import '../stylesheets/Item.css';

export const MyItem = ({product}) => {
    
    return (
        <Card style={{width:"18rem", padding:"1rem"}}>
            <Card.Img 
                variant="top"
                src={product.pictureUrl}
                className="image"
            />
            <Card.Body>
                <Card.Title>
                    {product.title}
                </Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <CardFooter className="buttonContainer">
                    <Button href="#" variant="primary">Ver</Button>
                    <p className="price">$ {product.price}</p>
                </CardFooter>
            </Card.Body>
        </Card>
    )
}