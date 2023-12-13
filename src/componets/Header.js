import { Navbar, Nav } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <Navbar bg='dark' expand="lg" variant="dark" >
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>            
                <Nav className='mr-auto navbar_wrapper'>
                <Link to="/add">Add Product</Link>
                <Link to="/edit">Edit Product</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </Nav>
        </Navbar>
    );
}

export default Header;