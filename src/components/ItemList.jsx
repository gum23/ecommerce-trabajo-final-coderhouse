import { Container } from "react-bootstrap";

import { MyItem } from "./Item";
import { Loading } from "./Loading";


export const ItemList = ({ products, loading }) => {
    
  return (
    <Container className="d-flex flex-wrap mt-3">
      { loading ? (
        <Loading />
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