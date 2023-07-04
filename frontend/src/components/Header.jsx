import React from 'react'
import { Badge, Navbar, Nav, Container } from 'react-bootstrap'; // import react-bootstrap components
import { FaShoppingCart, FaUser } from 'react-icons/fa'; // import react-icons
import { LinkContainer } from 'react-router-bootstrap'; // import react-router-bootstrap components
import { useSelector } from 'react-redux'; // import react-redux components
import logo from '../assets/logo.png'; // import logo

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart) // get cartItem from userSelector
  console.log(cartItems)

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
                            {
                                cartItems.length > 0 && (
                                    <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                                        { cartItems.reduce((a, c) => a + Number(c.qty), 0) }
                                    </Badge>
                                )
                            }
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