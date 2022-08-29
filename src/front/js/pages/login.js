import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import health from "../../img/health.jpg";

export const Login = () => {
  const { store, actions } = useContext(Context);

  return (
      <Container
        style={{
          backgroundImage: `url(${health})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "50rem",
        }}
      >
        <Container style={{ width: "25%", zIndex: "10", top: "25rem", left: "45rem", position: "absolute" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-black">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Container>
      </Container>
  );
};
