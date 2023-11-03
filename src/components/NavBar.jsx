import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CartWidget} from './CartWidget';

export const NavBar = () => {
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Tu Pedido</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#super">Super</Nav.Link>
                            <Nav.Link href="#limpieza">Limpieza</Nav.Link>
                            <Nav.Link href="#perfumeria">Perfumería</Nav.Link>
                        </Nav>
                        <Nav>
                        <CartWidget />
                        </Nav>
                </Container>
            </Navbar>
        </header>
    )
}
