import React, { useState } from "react";
import Button from "../../common/Button";
import * as styles from "./menu.module.css";
import logo from "./logo.svg";
import { Link } from "gatsby";
import { HamburgerMenu } from "./hamburgerMenu";

const Menu = () => {
  const [open, setOpen] = useState(false);

  let path = "";

  if (typeof window !== "undefined") {
    path = window.location.pathname;
  }

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setOpen(false);
    }
  };

  return (
    <nav className={styles.menu}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="All The Way logo" />
      </Link>
      <div className={styles.mobile}>
        <div className={styles.hamburgerMenu}>
          <button onClick={() => setOpen(!open)}>
            <HamburgerMenu></HamburgerMenu>
          </button>
        </div>
      </div>
      <ul className={`${open ? styles.open : ""}`}>
        <li className={`${path === "/" ? styles.active : ""}`}>
          <Link to="/">Startsida</Link>
        </li>
        <li onClick={() => handleScroll("medlemskap")}>Medlemskap</li>
        <li className={`${path === "/blogg" ? styles.active : ""}`}>
          <Link to="/blogg">Blogg</Link>
        </li>
        <li className={`${path === "/faq" ? styles.active : ""}`}>
          <Link to="/faq">FAQ</Link>
        </li>
        <li onClick={() => handleScroll("kontakt")}>Kontakt</li>
        <li className={styles.signIn}>
          <a
            href="https://allthewaygym.zoezi.se/member"
            target="_blank"
            rel="noreferrer"
          >
            Logga in
          </a>
        </li>
      </ul>
      <Button
        link="https://allthewaygym.zoezi.se/member"
        external
        className={styles.button}
      >
        Logga in
      </Button>
    </nav>
  );
};
export default Menu;
