import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header className="header">
      <Navbar>
        <Navbar.Brand href="#">회사 로고</Navbar.Brand>

        <Navbar.Toggle aria-controls="navigation-menu" />
        <Navbar.Collapse id="navigation-menu">
          <Nav>
            <Nav.Link href="#">회사소개</Nav.Link>
            <Nav.Link href="#">시공사례</Nav.Link>
            <Nav.Link href="#">시공상담</Nav.Link>
            <Nav.Link href="#">고객후기</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav className="login">
          <Navbar.Brand href="#">로그인</Navbar.Brand>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
