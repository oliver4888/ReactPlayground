import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./NavMenu.css";

export class NavMenu extends Component {
  render() {
    return (
      <header>
        <Navbar
          bg="light"
          expand="lg"
          className="bg-white border-bottom box-shadow mb-3"
          collapseOnSelect
        >
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>ReactTemplate</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <LinkContainer className="text-dark" to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer className="text-dark" to="/counter">
                  <Nav.Link>Counter</Nav.Link>
                </LinkContainer>
                <LinkContainer className="text-dark" to="/fetch-data">
                  <Nav.Link>Fetch data</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
