import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CartWidget} from './CartWidget';

export const NavBar = () => {
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="home">MusicArt</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="cuerdas">Cuerdas</Nav.Link>
                            <Nav.Link href="percucion">Percusion</Nav.Link>
                            <Nav.Link href="vientos">Vientos</Nav.Link>
                            <Nav.Link href="accesorios">Accesorios</Nav.Link>
                        </Nav>
                        <Nav>
                        <CartWidget />
                        </Nav>
                </Container>
            </Navbar>
        </header>
    )
}
