import { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

import data from '../data/products.json';


export const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {

    const promise = new Promise((res, rej) => {
          setTimeout(() => { res(data) }, 2000)
          })
        
    promise
      .then((resp) => { 
          if (categoryId) {
            const productFilteredByCategory = data.filter(
                  product => product.category === categoryId 
                )
            setProducts(productFilteredByCategory)
          } else {
            setProducts(resp)
          }
          })
      .finally(() => setLoading(false))

  }, [categoryId]);
    
  return (
    <section>
        <ItemList
            products={products}
            loading={loading}
        />
    </section>
  )
}