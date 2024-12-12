import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigationbar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>The Dojo Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="navbar">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create">New Blog</Nav.Link>
            </Nav>
        </Container>
      </Navbar> 
    );
}
 
export default Navigationbar;