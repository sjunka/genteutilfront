import React from "react";

import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  browserHistory
} from "react-router";

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

const Login = props => {
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
            <a style={{color:"red"}}
              onClick={() => props.history.push("/registro")}
              className="createacc pl-1"
            >
              CREAR CUENTA
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
