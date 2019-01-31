

import React, { Component } from 'react'




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

const Registro = () => {
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
                className="btn btn-outline-dark"
              >
                Registro Usuario
              </button>
            </div>
          </div>
          <div className="d-flex flex-column">
            <h3>Formulario</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit iusto
              hic aut, possimus repellat voluptas labore, rem in, eaque a velit
              quam temporibus culpa illo. Iure neque repellendus recusandae non.
            </p>
          </div>
        </Col>
      </Row>
    );
  };

  export default Registro;