import React from 'react'
import { useNavigate } from 'react-router-dom'; // import react-router-dom components
import { Badge, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'; // import react-bootstrap components
import { FaShoppingCart, FaUser } from 'react-icons/fa'; // import react-icons
import { LinkContainer } from 'react-router-bootstrap'; // import react-router-bootstrap components
import { useSelector, useDispatch } from 'react-redux'; // import react-redux components
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import logo from '../assets/logo.png'; // import logo

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart) // get cartItem from userSelector
  const { userInfo } = useSelector((state) => state.auth) // get userInfo from userSelector

  const dispatch = useDispatch() // create dispatch variable
  const navigate = useNavigate() // create navigate variable

  const [logoutApiCall] = useLogoutMutation() // create logoutApiCall variable

  const LogoutHandler = async () => {
    try {
        await logoutApiCall().unwrap()
        dispatch(logout())
        navigate('/login')
    } catch (error) {
        console.log(error) // show error in console
    }
  }

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
                        { userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={LogoutHandler}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (<LinkContainer to='/login'>
                        <Nav.Link href='/login'>
                            <FaUser /> Sign In
                        </Nav.Link>
                        </LinkContainer>)}
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header