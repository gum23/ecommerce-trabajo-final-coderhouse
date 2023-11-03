import { Container } from "react-bootstrap";

import { MyItem } from "./Item";


export const ItemList = ({ products, loading }) => {
    
    return (
        <Container className="d-flex flex-wrap mt-3">
            { loading ? (
                <div>loading...</div>
            ) : (
                products.map(product => (
                <MyItem 
                    key={product.id}
                    product={product}
                />)
            ))}
        </Container>
    )
}