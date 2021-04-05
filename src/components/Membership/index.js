import React, { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Checkbox from "../common/Checkbox";
import styles from "./membership.module.scss";

const Membership = ({ membershipRef }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const setState = {
    firstName: setFirstName,
    lastName: setLastName,
    phoneNumber: setPhoneNumber,
    acceptTerms: setAcceptTerms,
  };

  const handleChange = (e) => {
    setState[e.target.name](e.target.value);
  };
  return (
    <div
      className={`${styles.container} container`}
      ref={membershipRef}
      id="medlemskap"
    >
      <div className={styles.form}>
        <h1>
          Anmäl dig till en{" "}
          <span className={styles.light}>PHP - Personlig Hälsoplan</span>
        </h1>
        <form>
          <div className="row">
            <div className="form-group col-md-6">
              <Input
                label="Förnamn"
                type="text"
                value={firstName}
                name="firstName"
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <Input
                label="Efternamn"
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-12">
              <Input
                label="Telefonnummer"
                type="phone"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-12 text-left">
              <Checkbox name="acceptTerms" onChange={handleChange}>
                Jag godkänner att mina personuppgifter hanteras enligt GDPR.
              </Checkbox>
            </div>
          </div>
        </form>
        <Button light text="Bli medlem"></Button>
      </div>
    </div>
  );
};

export default Membership;
