import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Intro = () => {
  return (
    <Row style={{ marginTop: "4rem" }}>
      <Col xs="12">
        <div className="p-2 text-center">
          <img
            style={{
              width: "100%",
              objectFit: "cover"
            }}
            src="./imgs/logofull.png"
            alt="Card cap"
          />
        </div>
      </Col>
    </Row>
  );
};

export default Intro;
