import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import routes from "../routes";

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
                {routes.map((route, idx) => (
                  <LinkContainer
                    key={idx}
                    className="text-dark"
                    to={route.path}
                  >
                    <Nav.Link>{route.name}</Nav.Link>
                  </LinkContainer>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
