import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import {CartWidget} from './CartWidget';

import data from '../data/products.json';
const categories = data.map(item => item.category);
const uniqueCategories = new Set(categories);

export const NavBar = () => {
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <NavLink to="/" style={{textDecoration: "none"}}><Navbar.Brand>MusicArt</Navbar.Brand></NavLink>
                        <Nav className="me-auto">
                            {[...uniqueCategories].map(category => (
                                <Nav.Link as={NavLink} key={category} to={`/category/${category}`}>
                                    <span className='Nav-Link'>{category}</span>
                                </Nav.Link>
                            ))}
                        </Nav>
                        <Nav>
                        <CartWidget />
                        </Nav>
                </Container>
            </Navbar>
        </header>
    )
}
