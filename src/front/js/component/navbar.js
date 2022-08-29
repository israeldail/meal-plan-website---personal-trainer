import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ListGroup } from "react-bootstrap";

export const Navbar1 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg">
      <Container>
        <FontAwesomeIcon
          icon={faBars}
          style={{ fontSize: "32px", marginLeft: "1rem" }}
          onClick={handleShow}
        />
        <>
          <Offcanvas
            show={show}
            onHide={handleClose}
            style={{ backgroundColor: "#E2984E" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Meal Plans Brand Name</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ListGroup variant="flush">
                <ListGroup.Item style={{ backgroundColor: "#E2984E" }}>
                  Home
                </ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: "#E2984E" }}>
                  Shop
                </ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: "#E2984E" }}>
                  About
                </ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: "#E2984E" }}>
                  Company Policies
                </ListGroup.Item>
              </ListGroup>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      </Container>
      <Container className="justify-content-center">
        <Navbar.Brand>
          <h1>Meal Plans</h1>
        </Navbar.Brand>
      </Container>
      <Container className="justify-content-end">
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ fontSize: "32px", marginRight: "1rem" }}
        />
      </Container>
    </Navbar>
  );
};
