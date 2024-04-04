import { Button, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Navbars() {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container className="px-5">
          <Navbar.Brand>Movie API App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Search</Nav.Link>
            <Button>
              <Nav.Link href="/fav">My Favourates</Nav.Link>
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;
