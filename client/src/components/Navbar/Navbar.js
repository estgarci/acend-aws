import React, { Component } from 'react';
import { Nav, NavLink, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const NavComponent = (props) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   console.log(props)
//   return (
//       <>
//       <Navbar className="main-nav container-fluid pb-0 pt-0" light expand="md">
//         <div class="container">
//           <NavbarBrand id="title" href="/">
//             Acend
//           </NavbarBrand>
//           <NavbarToggler onClick={toggle}/>
//           <Collapse isOpen={isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <NavItem className="mr-4">
//                 <NavLink href="/components/"><FontAwesomeIcon className="mr-2" icon="globe-americas"></FontAwesomeIcon>English</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="/components/"><FontAwesomeIcon className="mr-2" icon="sign-in-alt"></FontAwesomeIcon>Sign in</NavLink>
//               </NavItem>
//             </Nav>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                   { !props.auth.isAuthenticated 
//                       ?
//                       <Button outline onClick={toggle}>
//                           <i className="fa fa-sign-in fa-lg" /> Login
//                           {props.auth.isFetching 
//                               ? <span className="fa fa-spinner fa-pulse fa-fw" />
//                               : null
//                           }
//                       </Button>
//                       :
//                       <div>
//                           <div className="navbar-text mr-3">{props.auth.user.username}</div>
//                           <Button outline onClick={props.handleLogout}>
//                               <span className="fa fa-sign-out fa-lg"></span> Logout
//                               {props.auth.isFetching 
//                                   ? <span className="fa fa-spinner fa-pulse fa-fw"/>
//                                   : null
//                               }
//                           </Button>
//                       </div>
//                   }
//               </NavItem>
//           </Nav>
//           </Collapse>
//         </div>
//       </Navbar>
//       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
//           <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
//           <ModalBody>
//               <Form onSubmit={this.handleLogin}>
//                   <FormGroup>
//                       <Label htmlFor="username">Username</Label>
//                       <Input type="text" id="username" name="username"
//                           innerRef={input => this.username = input} />
//                   </FormGroup>
//                   <FormGroup>
//                       <Label htmlFor="password">Password</Label>
//                       <Input type="password" id="password" name="password"
//                           innerRef={input => this.password = input} />
//                   </FormGroup>
//                   <FormGroup check>
//                       <Label check>
//                           <Input type="checkbox" name="remember"
//                               innerRef={input => this.remember = input} />
//                           Remember me
//                       </Label>
//                   </FormGroup>
//                   <Button type="submit" value="submit" color="primary">Login</Button>
//               </Form>
//           </ModalBody>
//       </Modal>
//       </>
//   );
// }

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
              <div class="container">
                <NavbarBrand id="title" href="/">
                  Acend
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNav}/>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem className="mr-4">
                      <NavLink href="/components/"><FontAwesomeIcon className="mr-2" icon="globe-americas"></FontAwesomeIcon>English</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/components/"><FontAwesomeIcon className="mr-2" icon="sign-in-alt"></FontAwesomeIcon>Sign in</NavLink>
                    </NavItem>
                  </Nav>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                        { !this.props.auth.isAuthenticated 
                            ?<>
                            <Button outline onClick={this.toggleModal}>
                                <i className="fa fa-sign-in fa-lg" /> Login
                                {this.props.auth.isFetching 
                                    ? <span className="fa fa-spinner fa-pulse fa-fw" />
                                    : null
                                }
                            </Button>
                            <div class="fb-login-button" data-width="" data-size="medium" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>
                            </>
                            :
                            <div>
                                <div className="navbar-text mr-3">{this.props.auth.user.username}</div>
                                <Button outline onClick={this.props.handleLogout}>
                                    <span className="fa fa-sign-out fa-lg"></span> Logout
                                    {this.props.auth.isFetching 
                                        ? <span className="fa fa-spinner fa-pulse fa-fw"/>
                                        : null
                                    }
                                </Button>
                            </div>
                        }
                    </NavItem>
                </Nav>
                </Collapse>
              </div>
            </Navbar>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username"
                                innerRef={input => this.username = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                                innerRef={input => this.password = input} />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"
                                    innerRef={input => this.remember = input} />
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>

          </React.Fragment>
      );
  }
}


export default NavComponent;
