import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.css'

function NavBar() {
  function logOut() {
    localStorage.setItem ("isLoggedIn", false)
  }

  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark" className='mb-3'>
      <Container>
        <Navbar.Brand href="/">Weather FAQ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/questions">Questions</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Navbar.Text className="text"></Navbar.Text>
            <Navbar.Text className='logout-container'>
              <a className='logout' href="/" onClick={logOut}>Logout</a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;