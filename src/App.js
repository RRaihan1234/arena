import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './responsive.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import logo from './images/logo.svg';

function App() {
  return (
    <div className="App">
        <Navbar expand="lg" className="header">
          <Container>
            <Navbar.Brand href="#home" className="logo"><img src={logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto menu-section">
                <NavDropdown title="Service" id="basic-nav-dropdown" className="service menu">
                  <NavDropdown.Item href="#s1" className='sub_menu'>Service1</NavDropdown.Item>
                  <NavDropdown.Item href="#s2" className='sub_menu'>Service2</NavDropdown.Item>
                  <NavDropdown.Item href="#s3" className='sub_menu'>Service3</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#technologies" className="technologies menu">Technologies</Nav.Link>
                <NavDropdown title="Products" id="basic-nav-dropdown" className="products menu">
                  <NavDropdown.Item href="#p1" className='sub_menu'>Product1</NavDropdown.Item>
                  <NavDropdown.Item href="#p2" className='sub_menu'>Product2</NavDropdown.Item>
                  <NavDropdown.Item href="#p3" className='sub_menu'>Product3</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#about-us" className="aboutus menu">About us</Nav.Link>
                <Nav.Link href="#industries" className="industries menu">Industries</Nav.Link>
                <Nav.Link href="#case-studies" className="case_studies menu">Case Studies</Nav.Link>
                <Nav.Link href="#career" className='career menu'>Career</Nav.Link>
                <Nav.Link href="#contact"><button className="contact menu">Contact</button></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  );
}

export default App;
