import React, { Component, Fragment } from "react";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
//
//
//
//
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
//
//
//
//
//
//

const Knowus = () => {
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
              Acerca de Gente Util
            </button>
          </div>
        </div>
        <div className="d-flex flex-column">
          <h3>Misión</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit iusto
            hic aut, possimus repellat voluptas labore, rem in, eaque a velit
            quam temporibus culpa illo. Iure neque repellendus recusandae non.
          </p>
          <h3>Vision</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            incidunt quisquam, corrupti unde ullam eligendi ut error expedita
            voluptas tenetur dolorem minus nemo. Recusandae dignissimos dolorum
            quisquam nobis voluptatibus fugiat! Iure dolore odio illo aut
            architecto libero, officia nisi? Odio.
          </p>
        </div>
      </Col>
    </Row>
  );
};
//
//
//
//
//
//

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <Row>
        <Col xs="12">
          <div>
            <Navbar
              color="white"
              light
              className="pt-2"
              fixed="top"
              expand="top"
            >
              <NavbarBrand href="/" className="mr-auto">
                Gente Util menu
              </NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="#">Acerca de</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Manual interno</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Ingresar</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Contacto</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </Col>
      </Row>
    );
  }
}
//
//
//
//
//
//
//
const Manual = () => {
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
              Manual Interno
            </button>
          </div>
        </div>
        <div className="d-flex flex-column">
          <h3>Derechos</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit iusto
            hic aut, possimus repellat voluptas labore, rem in, eaque a velit
            quam temporibus culpa illo. Iure neque repellendus recusandae non.
          </p>
          <h3>Deberes</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            incidunt quisquam, corrupti unde ullam eligendi ut error expedita
            voluptas tenetur dolorem minus nemo. Recusandae dignissimos dolorum
            quisquam nobis voluptatibus fugiat! Iure dolore odio illo aut
            architecto libero, officia nisi? Odio.
          </p>
        </div>
      </Col>
    </Row>
  );
};
//
//
//
//

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

///

const Login = () => {
  return (
    <div className="blockpadding">
      <div className="row">
        <div className="col-sm-12 mb-2 text-center">
          <div className="logo text-center mx-auto">
            <img
              style={{
                width: "70%",
                objectFit: "cover"
              }}
              src="./imgs/logofull.png"
              alt="Card cap"
            />
          </div>
        </div>
        <div className="col-sm-12 text-center">
          <p className="mb-0">Ingresa a tu cuenta</p>
          <p className="mb-2 logincolor">
            Acceso a desprendibles y liquidaciones
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 text-center">
          <div className="form-group">
            <input
              type="text"
              name="email"
              className="form-control"
              id="userEmail"
              placeholder="Correo/Usuario"
              autoComplete="on"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              id="userPassword"
              placeholder="Contraseña"
              autoComplete="off"
            />
          </div>
          <button
            type="button"
            className="btn btn-success btn-lg btn-block"
            // onClick={() => Router.push("/main/dashboard")}
          >
            INGRESAR
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 text-center">
          {/* <Link href="/user/rememberpassword"> */}
          <a className="nav-link logincolor">¿Olvidaste tu contraseña?</a>
          {/* </Link> */}
        </div>
        <hr />
        <div className=" col-sm-12 text-center">
          <span className="mb-0">
            ¿Áun no tienes una cuenta?
            <a
              // onClick={() => Router.push("/user/register")}
              className="createacc pl-1"
            >
              CREAR CUENTA
            </a>
          </span>
        </div>
      </div>

      <style jsx>{`
        .logincolor {
          color: #26a69a;
        }
        .blockpadding {
          padding: 40px;
        }
        .createacc {
          display: inline-block;
          color: #26a69a !important;
          paddong: ;
        }
        .createacc:hover {
          cursor: pointer;
          color: #26a69a;
        }
        .logo {
          width: 200px;
          height: 200px;
          fill: #007bff;
        }
      `}</style>
    </div>
  );
};

//
//

class App extends Component {
  render() {
    return (
      <Container>
        <Footer />
        <Intro />
        <Home />
        <Knowus />
        <Manual />
        <Ingreso />
        <Login />
      </Container>
    );
  }
}

export default App;
