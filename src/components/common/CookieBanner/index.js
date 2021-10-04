import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "gatsby";
import styles from "./cookieBanner.module.scss";
import Button from "../Button";

const CookieBanner = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["acceptCookie"]);

  const [acceptedCookie, setAcceptedCookie] = useState(
    cookies.acceptCookie === undefined ? false : true
  );

  const handleAcceptCookies = () => {
    setCookie("acceptCookie", true, {
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    });
    setAcceptedCookie(true);
  };

  if (acceptedCookie) {
    return null;
  }

  return (
    <div
      className={`${styles.cookieBanner} fixed-bottom d-flex align-items-center justify-content-between flex-column flex-md-row`}
    >
      <span>
        <p>Vi använder cookies, tyvärr är dessa inte ätbara 🍪</p>
        <p>
          Genom att använda denna sida eller stänga detta meddelande accepterar
          du vår{" "}
          <Link to="/cookies" title="Cookie Policy">
            cookiepolicy
          </Link>
          .
        </p>
      </span>
      <Button className="float-right" onClick={handleAcceptCookies} text="Ok">
        Ok
      </Button>
    </div>
  );
};

export default CookieBanner;
