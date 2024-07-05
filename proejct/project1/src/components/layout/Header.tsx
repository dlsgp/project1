import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Box,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Dropdown } from "react-bootstrap";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// const StyledBox = styled(Box)({
//   width: "1720px",
//   height: "60px",
//   backgroundColor: "#ffffffaa",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   margin: "0",
//   // boxShadow: "2px 5px 3px #e5e5e5",
//   position: "fixed",
//   top: 0,
//   zIndex: 100,
// });

// const StyledTab = styled(Tab)({
//   color: "black",
//   padding: "0",
//   fontSize: "16px",
//   marginLeft: "60px",
//   marginRight: "60px",
//   display: "flex",
//   alignItems: "center",
//   height: "60px",
// });

const Header = () => {
  return (
    <Navbar
      expand="lg"
      style={{
        position: "fixed",
        top: 0,
        zIndex: 100,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        width: "100%",
      }}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
