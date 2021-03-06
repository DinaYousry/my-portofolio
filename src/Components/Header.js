import React from 'react'
import { Nav, Navbar ,Offcanvas , Container ,Col , Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
<Container>
        <Navbar sticky="top" expand={false}>
  <Container fluid>
    <Navbar.Brand href="/" id="offcanvasNavbarLabel">D_Y</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel2">D_Y</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <Nav >
<br/><br/><br/><br/><br/>
          <Row className='rowww'>
                <Col lg={5} xs={5}>
                <p className='par' >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                </svg>
                </p>
                </Col>
                <Col lg={7} xs={7}  style={{textAlign:"right"}}>
                <NavLink className="navlink"  to="/">Home</NavLink>
                </Col>
            </Row>

            <Row  className='rowww'>
                <Col lg={5} xs={5}>
                <p className='par' >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-file-person" viewBox="0 0 16 16">
                <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                </p>
                </Col>
                <Col lg={7} xs={7} style={{textAlign:"right"}}>
                <NavLink className="navlink" to="/">Resume</NavLink>
                </Col>
            </Row>

            <Row  className='rowww'>
                <Col lg={5} xs={4}>
                <p className='par' >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
                <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
                </svg>
                </p>
                </Col>
                <Col lg={7} xs={8} style={{textAlign:"right"}}>
                <NavLink className="navlink" to="/">Projects</NavLink>
                </Col>
            </Row>

            <Row  className='rowww'>
                <Col lg={5} xs={4}>
                <p className='par' >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-telephone-inbound-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z"/>
                </svg>
                </p>
                </Col>
                <Col lg={7} xs={8} style={{textAlign:"right"}}>
                <NavLink className="navlink" to="/"> Contact</NavLink>
                </Col>
            </Row>

        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
</Container>
    </>
  )
}

export default Header