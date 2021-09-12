import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import {
  Navbar, 
  Container, 
  Nav, 
  NavDropdown,
  Row,
  Col 
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Check_token} from './Token';
import { LogIn, LogOut } from 'react-feather';
import { BsHouseDoor, BsFillGearFill, BsFillPersonLinesFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Post from "./Post";
import Profile from './Profile';
// import Footer from './Footer';
import Setting from './Setting';

function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  window.location.href ='/Home';
}
window.onload = function() {
  Check_token()
};

class NavBar extends Component {

  render() {
    return (
      <Router>
        <Navbar collapseOnSelect expand="sm" bg="dark" id="navbar">
          <Container className="container">
            <Navbar.Brand id="brand" href="/Home"><img id="logo"
                alt="Logo"
                src="/logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}Social Media</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav variant="pills" className="me-auto">
                  <NavLink to='/Home' id="item" activeClassName="active"><Row>
                      <Col xs={3}> {<BsHouseDoor/>}</Col>
                      <Col xs={3}>Home</Col>
                    </Row></NavLink>
                    {localStorage.getItem('token') && <NavLink to='/Post' id="item" activeClassName="active"><Row>
                        <Col xs={3}> <FiEdit/ >  </Col>
                        <Col xs={3}> Post </Col>
                      </Row></NavLink>}
              </Nav>
              <Nav variant="pills">
                {!localStorage.getItem('token') && <NavLink to='/Login' id="item" activeClassName="active">Login {<LogIn/>}</NavLink>}
                {!localStorage.getItem('token') && <NavLink to='/Register' id="item" activeClassName="active">Register</NavLink>}
                {localStorage.getItem("token") && 
                  
                    <NavDropdown title={localStorage.getItem("username")}  id="item" menuVariant="dark">
                          <NavDropdown.Item>
                            <NavLink to="/Profile" id="item" activeClassName="active"><Row>
                              <Col>Profile</Col> 
                              <Col>{<BsFillPersonLinesFill />}</Col>
                            </Row></NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <NavLink to="/Setting" id="item" activeClassName="active"><Row>
                              <Col>Setting</Col> 
                              <Col>{<BsFillGearFill />}</Col>
                            </Row></NavLink>
                            </NavDropdown.Item>
                          <NavDropdown.Divider/>
                          <NavDropdown.Item id="dropdown" onClick={logout}>
                            <Row>
                              <Col>LogOut</Col> 
                              <Col>{<LogOut />}</Col>
                            </Row>
                            </NavDropdown.Item>
                    </NavDropdown>
                  }
              </Nav>
            </Navbar.Collapse>
            
          </Container>
        </Navbar>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/Home"><Home/> </Route>
          <Route exact path="/Post"><Post/></Route>
          <Route exact path="/Login"><Login/></Route>
          <Route exact path="/Register"><Register/></Route>
          <Route exact path="/Profile"><Profile/></Route>
          <Route exact path="/Setting"><Setting/></Route>
      </Router>
      
    )
  }
}
export default NavBar;