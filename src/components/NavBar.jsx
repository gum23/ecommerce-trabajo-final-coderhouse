import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import {CartWidget} from './CartWidget';
import '../stylesheets/NavBar.css'
import data from '../data/products.json';
const categories = data.map(item => item.category);
const uniqueCategories = new Set(categories);

export const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" style={{paddingLeft: "100px", paddingRight: "40px"}}>
        <div className="container-fluid">
        <NavLink to="/" style={{textDecoration: "none"}}><Navbar.Brand>MusicArt</Navbar.Brand></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Nav className="me-auto">
              {[...uniqueCategories].map(category => (
                <Nav.Link as={NavLink} key={category} to={`/category/${category}`}>
                    <span className='Nav-Link nav-item'>{category}</span>
                </Nav.Link>
              ))}
            </Nav>
            <Nav>
              <CartWidget />
            </Nav>
          </div>
        </div>
      </nav>
    </header>
  )
}
