import { useState, useEffect } from 'react';
import { ItemList } from './ItemList';

import data from '../data/products.json'; //Data


export const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const promise = new Promise((res, rej) => {
        setTimeout(() => { res(data) }, 3000)
        })
    
    promise
      .then((resp) => { setProducts(resp) })
      .finally(() => setLoading(false))
    
    }, []);
    console.log({products})
    return (
      <section>
          <ItemList
              products={products}
              loading={loading}
          />
      </section>
    )
}