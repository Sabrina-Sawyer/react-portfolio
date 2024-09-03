// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Footer.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// TODO: Create a styles object called "styles"

const styles = {
  footerStyle: {
    background: '#7acbdf',
    justifyContent: 'flex-end',
  },
};

function Footer() {
  return (
    <Navbar fixed="bottom" style={styles.footerStyle} className="footer">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="mx-auto">
        <Nav.Link href="https://github.com/Sabrina-Sawyer" target="_blank" rel="noopener noreferrer">GitHub</Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/sabrina-sawyer/" target="_blank" rel="noopener noreferrer">LinkedIn</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Footer;
