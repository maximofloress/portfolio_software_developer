import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
    return (
        <>
        <Navbar bg="primary" data-bs-theme="white">
          <Container>
            <Navbar.Brand href="/">Formula 1</Navbar.Brand>
            <Nav className=" me-auto">
              <Nav.Link href="/corredores">Corredores</Nav.Link>
              <Nav.Link href="/registrar">Registrar</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
}

export default NavBar;