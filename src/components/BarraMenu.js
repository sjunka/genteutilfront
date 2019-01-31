import React from "react";

import { Link } from "react-router-dom";

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

class BarraMenu extends React.Component {
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
              fixed="bottom"
              expand="top"
            >
              <NavbarBrand href="/" className="mr-auto">
                Gente Util
              </NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <Link replace to="/login">
                      Ingresar
                    </Link>
                  </NavItem>

                  <NavItem>
                    <Link replace to="/manual">
                      Manual interno
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link replace to="/info">
                      Sobre Gente Util
                    </Link>
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

export default BarraMenu;
