import { Link } from "gatsby";
import React from "react";
import Panel from "../../common/Panel";
import {
  IconFacebook,
  IconInstagram,
  IconLinkedIn,
} from "../../common/SvgIcon";
import Content from "../Content";
import Contact from "./Contact";
import * as styles from "./footer.module.css";
import Map from "./Map";
import Membership from "./Membership";

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.twoSection}>
      <Membership></Membership>
      <Map></Map>
    </div>
    <Content>
      <Panel
        firstContent={<Contact />}
        secondContent={
          <div className={styles.information}>
            <div>
              <h2>Öppettider</h2>
              <ol>
                <li>Mån-Sön: 05:00-23:00</li>
              </ol>
              <h2>Bemannade tider</h2>
              <ol>
                <li>Mån-Tor: 08:00-20:00</li>
                <li>Fre: 08:00-18:00</li>
                <li>Lör: 09:00-17:00</li>
              </ol>
            </div>
            <div>
              <h2>Address</h2>
              <ol>
                <li>Djäknegatan 33, 211 35 Malmö</li>
              </ol>

              <h2>Telefon</h2>
              <ol>
                <li>040-888 69</li>
              </ol>
            </div>
          </div>
        }
      ></Panel>
      <div className={styles.social}>
        <a
          href="https://www.instagram.com/allthewaygym/"
          target="_blank"
          rel="noreferrer"
        >
          <IconInstagram />
        </a>
        <a
          href="https://www.facebook.com/AllTheWayGym/"
          target="_blank"
          rel="noreferrer"
        >
          <IconFacebook />
        </a>
        <a
          href="https://www.linkedin.com/company/allthewaygym/"
          target="_blank"
          rel="noreferrer"
        >
          <IconLinkedIn />
        </a>
      </div>
      <div className={styles.legal}>
        Copyright &copy; All The Way 2021 •{" "}
        <Link
          to="/cookies"
          className="text-white-50"
          title="Cookie Policy"
          target="_blank"
        >
          Cookiepolicy
        </Link>{" "}
        •{" "}
        <Link
          to="/gdpr"
          className="text-white-50"
          title="GDPR"
          target="_blank"
          rel="noreferrer"
        >
          GDPR
        </Link>
      </div>
    </Content>
  </div>
);

export default Footer;
