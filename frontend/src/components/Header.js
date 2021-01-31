import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Ecommerce</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className='ml-auto'>

              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                  {/* <i className='fad fa-cart-arrow-down'></i>
                  <i className="fad fa-shopping-cart"></i> */}
                </Nav.Link>
              </LinkContainer>
                  {/* User after login.... */}
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>My Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/About'>
                    <NavDropdown.Item>About Us</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/Contact'>
                    <NavDropdown.Item>Contact Us</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/COVID-19'>
                    <NavDropdown.Item>COVID-19</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}


              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users list</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products list</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders list</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
