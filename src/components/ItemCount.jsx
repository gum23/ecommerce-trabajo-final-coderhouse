import { useState } from 'react';
import {  Button } from 'react-bootstrap';


import '../stylesheets/ItemCount.css';

export const ItemCount = ({ stock, onAdd, initial}) => {

  const [count, setCount] = useState(initial);

  const handleDecrease = () => {
    setCount((prev) => prev - 1)
  }
  const handleIncrease = () => {
    setCount((prev) => prev + 1)
  }
  const handleAdd = () => {
    onAdd(count)
  }


  return (
    <div id='containerCount'>
      <div className='containerControls'>
        <Button className='decrement' variant="dark" disabled={count<2} onClick={handleDecrease} > - </Button>
        <div className='counter'>{count}</div>
        <Button className='increment' variant='dark' disabled={count === stock} onClick={handleIncrease}>+</Button>
      </div>
      <Button id='addToCart' variant='dark' onClick={handleAdd}>Agreagr al Carrito</Button>
    </div>
  )
}