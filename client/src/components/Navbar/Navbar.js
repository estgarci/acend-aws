import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Col, Row, Nav, NavLink, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FacebookLogin from 'react-facebook-login';
import LoginGithub from 'react-login-github';
import axios from 'axios';
import { baseUrl } from '../../shared/baseUrl';


export function ContWithFacebook(props) {
  const btnStyle = {    'backgroundColor': 'rgb(24, 119, 242)',
      'borderRadius': 'inherit',
      'fontSize': '1rem',
      'border':'0',
      'left': '0',
     ' opacity': '0',
     ' position': 'absolute',
     ' top': '0',
     'width': '100%',
     'textTransform': 'capitalize'}


  const responseFacebook = (response) => {
    if(response){
      console.log(response);
      props.facebookLoginUser(response)
      props.toggleModal()
    }
  }

  return (
    <FacebookLogin
                  appId="1369933030105210"
                  size='medium'
                  fields="name"
                  scope="public_profile"
                  callback={responseFacebook}
                  textButton='Sign in with Facebook'
                  buttonStyle={btnStyle}
                  icon="fa-facebook" />
    )
}

export function ContWithGithub(props) {

  const responseGit = async(response) => {
    if(response){
      props.githubLoginUser(response.code)
      console.log(response)
      props.toggleModal()
    }
  }

  return (<>
    {/* <FontAwesomeIcon className="d-flex" color='black' icon="github"></FontAwesomeIcon> */}
    <LoginGithub
        clientId='2311bf273d646f269010'
        size='medium'
        onSuccess={responseGit}
        className='github-login'
  /></>
  )
}

class NavComponent extends Component {

  constructor(props) {
      super(props);
      this.state = {
          isNavOpen: false,
          isModalOpen: false
      };

      this.toggleNav = this.toggleNav.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
  }

  toggleNav() {
      this.setState({
          isNavOpen: !this.state.isNavOpen
      });
  }

  toggleModal() {
      this.setState({
          isModalOpen: !this.state.isModalOpen
      });
  }

  handleLogin(event) {
      this.toggleModal();
      this.props.loginUser({username: this.username.value, password: this.password.value});
      event.preventDefault();


  }

  handleLogout() {
      this.props.logoutUser();
  }

  

  render() {
     

      return (
          <React.Fragment>
              <Navbar className="main-nav container-fluid pb-0 pt-0" light expand="md">
              <div className="container p-0">
                <NavbarBrand id="title" href="/">
                  Acend
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNav}/>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar className="ml-auto justify-content-around">
                    <NavItem className="d-block p-2">
                    { !this.props.auth.isAuthenticated?
                        <Button size='md' color='outline-dark' onClick={this.toggleModal}>
                        <FontAwesomeIcon className="mr-2" icon="sign-in-alt"></FontAwesomeIcon>Log in
                        </Button>
                      :
                        <div>
                            {this.props.auth.user.name.split(' ')[0]}
                            <Button outline onClick={this.handleLogout}>
                                <span className="fa fa-sign-out fa-lg"></span>
                            </Button>
                        </div>
                      }
                    </NavItem>
                    {/* <NavItem className="d-block py-2 pl-2 pr-0">
                      <Button><FontAwesomeIcon className="mr-2" icon="level-up-alt"></FontAwesomeIcon>Sign up</Button>
                    </NavItem> */}
                    </Nav>
                </Collapse>
              </div>
            </Navbar>
            {/* *****modal***** */}
            <Modal size='md' isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalBody className=''>
                    <Row className="">
                      <Col xs='6' className=''>
                        <ContWithFacebook facebookLoginUser={this.props.facebookLoginUser} toggleModal={this.toggleModal}/>
                        <ContWithGithub githubLoginUser={this.props.githubLoginUser} toggleModal={this.toggleModal}/>
                      </Col>
                      <Col xs='6' className='align-self-center'>
                        <Row className="justify-content-center"><Form className='' onSubmit={this.handleLogin}>
                          <FormGroup>
                              <Label htmlFor="username">Username</Label>
                              <Input className="" type="text" id="username" name="username"
                                  innerRef={input => this.username = input} />
                          </FormGroup>
                          <FormGroup>
                              <Label htmlFor="password">Password</Label>
                              <Input className="" type="password" id="password" name="password"
                                  innerRef={input => this.password = input} />
                          </FormGroup>
                          <FormGroup check>
                              <Label check>
                                  <Input className="" type="checkbox" name="remember"
                                      innerRef={input => this.remember = input} />
                                  Remember me
                              </Label>
                          </FormGroup>
                          <Button className="my-2 text-center" type="submit" value="submit" color="primary">Login</Button>
                          
                      </Form></Row>
                      </Col>
                    </Row>
                </ModalBody>
            </Modal>
          </React.Fragment>
      );
  }
}


export default NavComponent;
