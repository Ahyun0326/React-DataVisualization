import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
export const NavBarEx = () => {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
              <Navbar.Brand href="/">React 시각화 웹</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/Charts">Charts</Nav.Link>

                      {/* <NavDropdown title="Charts" id="collasible-nav-dropdown">
                          <NavDropdown.Item href="/bar">Bar</NavDropdown.Item>
                          <NavDropdown.Item href="/line">Line</NavDropdown.Item>
                          <NavDropdown.Item href="/pie">Pie</NavDropdown.Item>
                          <NavDropdown.Item href="/doughnut">Doughnut</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                      </NavDropdown> */}
                      
                  </Nav>
                  <Form className="d-flex">
                      <Form.Control
                          type="search"
                          placeholder="Search"
                          className="me-2"
                          aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                  </Form>
                 
              </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}
