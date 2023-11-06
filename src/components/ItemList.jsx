import { Container } from "react-bootstrap";

import { MyItem } from "./Item";
import '../stylesheets/ItemList.css'


export const ItemList = ({ products, loading }) => {
    
    return (
        <Container className="d-flex flex-wrap mt-3">
            { loading ? (
                    <div className="loader">
                        <div className="box-load1"></div>
                        <div className="box-load2"></div>
                        <div className="box-load3"></div>
                    </div>
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