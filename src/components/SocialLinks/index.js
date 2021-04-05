import React from "react";
import config from "../../../config";
import styles from "./socialLinks.module.scss";

const SocialLinks = () => {
  return (
    <section className={`${styles.contactSection} bg-primary`}>
      <div className="container">
        <div className={`${styles.social} d-flex justify-content-center`}>
          {config.socialLinks.map((social) => {
            const { icon, url, name } = social;
            return (
              <a key={url} href={url} className={`mx-2`} title={name}>
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
