import React from "react";
import "./Nav.css";
import {Nav , Navbar  , NavDropdown, Container} from "react-bootstrap";
import logo from "../Assets/logo_My_Virtual_Trainer.svg";




const MenuIsLoggedIn = props => {
  const onLogout = () => {
    document.cookie ="jwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    props.handleLogout();
};
return(
<React.Fragment>
<Nav className="mr-auto">
      <Nav.Link id='underline' href="/about">About</Nav.Link>
      <Nav.Link id='underline' href="/blog">Blog</Nav.Link>
      <Nav.Link id='underline' href="/before_and_after">Before and After</Nav.Link>
      <Nav.Link id='underline' href="/foods">Foods</Nav.Link>
      <NavDropdown title="Profile" id="collasible-nav-dropdown">
        <NavDropdown.Item  href="/profile">My Profile</NavDropdown.Item>
        <NavDropdown.Item  href="/maps">Maps</NavDropdown.Item>
        <NavDropdown.Item  href="/diary">Diary</NavDropdown.Item>
        <NavDropdown.Item href="/reports">Reports</NavDropdown.Item>
      </NavDropdown>
    </Nav>  
    <Nav>
      <Nav.Link>
      <button type="button"className="btn btn-primary" onClick={onLogout}>Logout</button>
      </Nav.Link>
</Nav>
</React.Fragment>
)
}
const MenuIsNotLoggedIn = () => {

return(
<React.Fragment>
<Nav className="mr-auto">
      <Nav.Link id='underline' href="/about">About</Nav.Link>
      <Nav.Link id='underline' href="/blog">Blog</Nav.Link>
      <Nav.Link id='underline' href="/before_and_after">Before and After</Nav.Link>
      <Nav.Link id='underline' href="/foods">Foods</Nav.Link>
</Nav>  
<Nav>
      <Nav.Link  href="/login">
      <button type="button" id ='btnLogin' className="btn btn-primary">Login</button>
      </Nav.Link>
</Nav>
</React.Fragment>
)
}


const Navigation = (props) => {
  console.log(props)

  const { isLoggedIn, handleLogout } = props;


  return (
    <>
<Navbar collapseOnSelect expand="lg"  bg="myBackground" variant="light" fixed = 'top'  sticky='top' >
<Container>
  <Navbar.Brand href="/" id="logo">
      <img
        alt=""
        src={logo}
        width="100%"
        className="d-inline-block align-top float-right nopadding"
      />
    </Navbar.Brand> 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" >

  {isLoggedIn ? (
                    <MenuIsLoggedIn handleLogout={handleLogout} />
                ) : (
                        <MenuIsNotLoggedIn />
                )}




  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
};
export default Navigation;
