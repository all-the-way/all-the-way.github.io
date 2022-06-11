import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "gatsby";
import * as styles from "./cookieBanner.module.css";
import Button from "../../common/Button";
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
    <div className={styles.cookieBanner}>
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
      <Button onClick={handleAcceptCookies}>Ok</Button>
    </div>
  );
};

export default CookieBanner;
