import React, { setState, useEffect, useState } from 'react';
import { Col, Row, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,
  Button, Modal, ModalBody,
  Form, FormGroup, Input, Label, Container, DropdownItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { baseUrl } from '../shared/baseUrl';
import GoogleButton from 'react-google-button'
import { NavLink as NavLinkRouter, useNavigate } from 'react-router-dom';

import {loginUser, logoutUser} from '../redux/actionCreators';
import {useDispatch, useSelector} from 'react-redux'
import { useAuth } from '../hooks/useAuth';

function NavComponent(){

  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const auth = useSelector(state => state.auth)
  const {auth} = useAuth()
  const [modalOpen, setModalOpen] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  const handleLogin = (event) => {
    //prevent default is important in the case that you dont want to spend 3 hours figuring out why your uncontrolled form is acting weird...
    event.preventDefault()
    toggleModal();
    dispatch(loginUser({ 'username': username, 'password': password}));
    // setAuth('user')
  }

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logoutUser());

  }

  const google = () => {
    window.open(baseUrl + 'api/users/google', "_self")
  }

  return (
    <>
    <Navbar id="main-nav" className="main-nav container-fluid p-0 " light expand="md">
      <Container className='px-3 p-sm-0'>
      <NavLinkRouter id="main-logo" className='nav-item logo' to='/' >
        Acend
      </NavLinkRouter>
      <Nav navbar className="">
        { !auth.user.username?
          <NavItem className="">
            <NavLink href="#" onClick={toggleModal}>
              <FontAwesomeIcon className="mr-2" icon="sign-in-alt"/>Sign in</NavLink>
          </NavItem>               
          :
          <UncontrolledDropdown className="">
            <DropdownToggle className="" nav caret>
                {
                auth.user.firstname.charAt(0).toUpperCase() + auth.user.firstname.substr(1)} 
            </DropdownToggle>
            <DropdownMenu className="text-center" right>
            <NavLinkRouter to="/mytrips">
              <DropdownItem id="" className="mytrips-button">
                My trips
              </DropdownItem>
            </NavLinkRouter>
              <DropdownItem id="singout-button" className="" onClick={(event) => handleLogout(event)}>
                Sing out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> }                   
      </Nav>
      </Container>             
     </Navbar>
    <Modal size='sm' isOpen={modalOpen} toggle={toggleModal}>
        <ModalBody className='main-nav-modal'>
              <Col xs='12' className=''>
                  <h1 className=''>Sign in with <span className="logo">Acend</span></h1>
                <Row className="justify-content-center">
                <Form className='text-left' onSubmit={(event) => handleLogin(event)}>
                  <FormGroup>
                    <Label htmlFor="username" >Email</Label>
                    <Input className="form-input" type="email" id="username" name="username"
                        value={username} onChange={(e) => setUsername(e.target.value)}/>
                  </FormGroup>
                  <FormGroup className=''>
                    <Label htmlFor="password" className='d-inline-block' >Password</Label>
                    <span className="d-inline-block float-right"><a href="#"><small>Forgot password?</small></a></span>
                    <Input className="form-input d-block" type="password" id="password" name="password" 
                      value={password} onChange={(e) => setPassword(e.target.value)} />
                  </FormGroup>
                  <FormGroup className='d-flex justify-content-between'>
                    <Button type="submit" className='' value="submit" color="primary">Sign in</Button>
                    <NavLinkRouter to="/signup" onClick={toggleModal}>Sign up</NavLinkRouter>
                  </FormGroup>
                </Form>
                </Row>
                <h1>Or</h1>
                <Row className='justify-content-center'>
                  <GoogleButton type='light' onClick={google}/>
                </Row>
              </Col>
        </ModalBody>
    </Modal>
    </>)
}

export default NavComponent;
