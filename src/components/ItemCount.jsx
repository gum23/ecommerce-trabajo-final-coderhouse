import { useState } from 'react';
import {  Button } from 'react-bootstrap';


import '../stylesheets/ItemCount.css';

export const ItemCount = ({ stock, onAdd}) => {

  const [count, setCount] = useState(1);

  const handleSubtract = () => {
    setCount((prev) => prev - 1)
  }
  const handleAdd = () => {
    setCount((prev) => prev + 1)
  }
  const addCart = () => {
    onAdd(count)
  }


  return (
    <div id='containerCount'>
      <div className='containerControls'>
        <Button className='decrement' variant="dark" disabled={count<2} onClick={handleSubtract} > - </Button>
        <div className='counter'>{count}</div>
        <Button className='increment' variant='dark' disabled={count === stock || stock == 0} onClick={handleAdd}>+</Button>
      </div>
      <Button id='addToCart' variant='dark' onClick={addCart}>Agreagr al Carrito</Button>
    </div>
  )
}