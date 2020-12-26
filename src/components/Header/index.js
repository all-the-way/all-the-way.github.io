import React, { useState, useEffect } from "react";
import Scroll from "../Scroll";
import logo from "../../assets/images/logo.svg";
import { Link } from "gatsby";

const Header = ({ logoOnly = false }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [visibilityClass, setVisibilityClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        if (visibilityClass !== "navbar-shrink") {
          setVisibilityClass("navbar-shrink");
        }
      } else {
        if (visibilityClass === "navbar-shrink") {
          setVisibilityClass("");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibilityClass]);

  const toggleMenu = (value) => {
    setOpenMenu(value);
  };

  const renderMenu = () => {
    return (
      <React.Fragment>
        <button
          onClick={(_) => toggleMenu(!openMenu)}
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
                onClick={(_) => toggleMenu(!openMenu)}
                type="id"
                element="upplev-oss"
              >
                <a className="nav-link" href="/#upplev-oss">
                  Upplev oss
                </a>
              </Scroll>
            </li>

            <li className="nav-item">
              <Scroll
                onClick={(_) => toggleMenu(!openMenu)}
                type="id"
                element="utbud"
              >
                <a className="nav-link" href="/#utbud">
                  Utbud
                </a>
              </Scroll>
            </li>
            <li className="nav-item">
              <Scroll
                onClick={(_) => toggleMenu(!openMenu)}
                type="id"
                element="intresseanmalan"
              >
                <a className="nav-link" href="/#intresseanmalan">
                  Intresseanmälan
                </a>
              </Scroll>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
      id="mainNav"
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} className="logo" alt="logotype"></img>
        </Link>

        {!logoOnly && renderMenu()}
      </div>
    </nav>
  );
};
export default Header;
