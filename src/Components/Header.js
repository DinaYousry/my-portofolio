import React from 'react'
import {Navbar , Nav, Offcanvas ,Container } from 'react-bootstrap'

const Header = () => {
  return (
    <>

        <Navbar sticky="top" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#">D_Y</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">D_Y</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Resume</Nav.Link>
          <Nav.Link href="#action2">Projects</Nav.Link>
          <Nav.Link href="#action2">Contact</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    </>
  )
}

export default Header