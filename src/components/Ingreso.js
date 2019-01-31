import React from 'react'


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


const Ingreso = () => {
    return (
      <Row>
        <Col xs="12">
          <div className="d-flex justify-content-center">
            <div
              className="text-center"
              style={{
                width: "100%",
                minHeight: "100px",
                marginTop: "50px"
              }}
            >
              <button
                style={{
                  fontSize: "1.25rem"
                }}
                type="button"
                class="btn btn-outline-dark"
              >
                Ingreso Desprendibles
              </button>
            </div>
          </div>
          <div className="d-flex flex-column" />
        </Col>
      </Row>
    );
  };


  export default Ingreso;