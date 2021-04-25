import { Link } from "gatsby";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary small text-center text-white-50">
      <div className="container">
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
        <Link to="/gdpr" className="text-white-50" title="GDPR" target="_blank">
          GDPR
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
