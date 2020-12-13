import React from "react";
import config from "../../../config";

const SocialLinks = () => {
  return (
    <section className="contact-section bg-primary">
      <div className="container">
        <div className="social d-flex justify-content-center">
          {config.socialLinks.map((social) => {
            const { icon, url } = social;
            return (
              <a key={url} href={url} className={`mx-2`}>
                <i className={`fab ${icon}`}></i>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
