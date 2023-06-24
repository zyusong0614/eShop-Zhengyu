import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'; // import react-bootstrap components
import { FaShoppingCart, FaUser } from 'react-icons/fa'; // import react-icons
import { LinkContainer } from 'react-router-bootstrap'; // import react-router-bootstrap components
import logo from '../assets/logo.png'; // import logo

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>  
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand>
                    <img src={logo} alt='ProShop' />
                    ProShop
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <LinkContainer to='/cart'>
                        <Nav.Link>
                            <FaShoppingCart /> Cart
                        </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                        <Nav.Link>
                            <FaUser /> Sign In
                        </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header