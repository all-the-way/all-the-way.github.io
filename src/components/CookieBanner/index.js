import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "gatsby";

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
    <div className="fixed-bottom cookie-banner text-center d-flex align-items-center justify-content-between flex-column flex-md-row">
      <span>
        Vi använder cookies, tyvärr är de inte ätbara - Genom att använda denna
        sida eller stänga detta meddelande accepterar du vår cookiepolicy.{" "}
        <Link to="/cookies">Läs mer</Link>
      </span>

      <button
        className="btn btn-primary float-right mt-2"
        onClick={handleAcceptCookies}
      >
        Ok
      </button>
    </div>
  );
};

export default CookieBanner;
