import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { Loading } from './Loading';
import { ItemDetail } from './ItemDetail';

import products from '../data/products.json';


export const ItemDetailContainer = () => {

  const [productId, setProductId] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const detailOfProduct =  products.find(
      product => product.id === Number(id)
    )

    const promise = new Promise((res, rej) => {
    setTimeout(() => { res(detailOfProduct) }, 2000)
    })

    promise
    .then((resp) => { setProductId(resp) })
    .finally(() => setLoading(false))
  
  }, [id]);


  return (
    <Container className="d-flex flex-wrap mt-3">
      {loading ? <Loading /> : <ItemDetail product={productId} />}
    </Container>
  )
}