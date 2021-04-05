import { Link } from "gatsby";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary small text-center text-white-50">
      <div className="container">
        Copyright &copy; All The Way 2020 •{" "}
        <Link
          to="/cookies"
          className="text-white-50"
          title="Cookie Policy"
          target="_blank"
        >
          Cookiepolicy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
