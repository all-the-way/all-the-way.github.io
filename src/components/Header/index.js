import React, { Component } from "react";
import Scroll from "../Scroll";
import logo from "../../assets/images/logo.svg";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: "",
    };
  }
  toggleMenu = (value) => {
    this.setState({ openMenu: value });
  };
  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== "navbar-shrink") {
        this.setState({ visibilityClass: "navbar-shrink" });
      }
    } else {
      if (visibilityClass === "navbar-shrink") {
        this.setState({ visibilityClass: "" });
      }
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container">
          <div className="navbar-brand" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} className="logo"></img>
          </div>
          <button
            onClick={(_) => this.toggleMenu(!openMenu)}
            className={`navbar-toggler navbar-toggler-right ${
              openMenu ? "" : "collapsed"
            }`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div
            className={`collapse navbar-collapse ${openMenu ? "show" : ""}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Scroll
                  onClick={(_) => this.toggleMenu(!openMenu)}
                  type="id"
                  element="upplev-oss"
                >
                  <a className="nav-link" href="#upplev-oss">
                    Upplev oss
                  </a>
                </Scroll>
              </li>

              <li className="nav-item">
                <Scroll
                  onClick={(_) => this.toggleMenu(!openMenu)}
                  type="id"
                  element="utbud"
                >
                  <a className="nav-link" href="#utbud">
                    Utbud
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={(_) => this.toggleMenu(!openMenu)}
                  type="id"
                  element="intresseanmalan"
                >
                  <a className="nav-link" href="#intresseanmalan">
                    Intresseanmälan
                  </a>
                </Scroll>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
