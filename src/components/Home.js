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



const Home = () => {
    return (
      <Row>
        <Col xs="12">
          <div className="d-flex flex-column align-items-center">
            <div className="p-2 text-center">
              {/* <img
                              style={{
                                  width: "70%",
                                  objectFit: "cover",
                                  height: "200px"
                              }}
                              src="./imgs/logosolo.png"
                              alt="Card cap"
                          /> */}
            </div>
            <div className="p-2">Acerca de</div>
            <div className="p-2">Manual interno</div>
            <div className="p-2">Ingresar</div>
            <div className="p-2">Contacto</div>
          </div>
        </Col>
  
        <Col xs="12">
          <div
            className="d-flex flex-row justify-content-center mb-2"
            style={{ fontSize: "30px" }}
          >
            <div className="p-2">
              <i className="fab fa-instagram" />
            </div>
            <div className="p-2">
              <i className="fab fa-facebook" />
            </div>
            <div className="p-2">
              <i className="fab fa-youtube" />
            </div>
            <div className="p-2">
              <i className="fab fa-twitter" />
            </div>
          </div>
        </Col>
      </Row>
    );
  };


export default Home;