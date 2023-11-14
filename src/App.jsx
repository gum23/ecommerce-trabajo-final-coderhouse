import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Error404 } from './components/Error404';
  
function App() {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/products/:id" element={<ItemDetailContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
