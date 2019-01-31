//******************************
//  Import componentes React   *
//******************************
import React, { Component, Fragment } from "react";

import { Route, Switch } from "react-router-dom";

//******************************
// Import Containers(HOC) y Components

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
//******************************

//******************************
// Import Internal Components
//******************************

// import Footer from "./components/Footer";

import BarraMenu from "./components/BarraMenu.js";

import Home from "./components/Home.js";

import Login from "./components/Login.js";

import Ingreso from "./components/Ingreso";
import Intro from "./components/Intro";

import Knowus from "./components/Knowus.js";
import Manual from "./components/Manual";
import Registro from "./components/Registro";

//Importar Estilos
//import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <div className="mb-2">
          </div>
            <Switch>
              <Route exact path="/" component={Intro} />

              <Route exact path="/login" component={Login} />

              <Route exact path="/info" component={Knowus} />

              <Route exact path="/manual" component={Manual} />
              <Route exact path="/registro" component={Registro} />
            </Switch>
          <BarraMenu/>
        </Container>
      </Fragment>
    );
  }
}

export default App;
