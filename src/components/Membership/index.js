import React, { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Checkbox from "../common/Checkbox";
import styles from "./membership.module.scss";

const Membership = ({ membershipRef, center }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [message, setMessage] = useState("");

  const setState = {
    firstName: setFirstName,
    lastName: setLastName,
    phoneNumber: setPhoneNumber,
  };

  const handleChangeAcceptTerms = (e) => {
    setAcceptTerms(e.target.checked);
  };

  const handleChange = (e) => {
    setMessage("");
    setState[e.target.name](e.target.value);
  };

  const onPost = () => {
    console.log(acceptTerms);
    if (!firstName || !lastName || !phoneNumber) {
      setMessage("Vänligen fyll i alla fält");
      return;
    }

    if (!acceptTerms) {
      setMessage("Vänligen acceptera våra villkor");
      return;
    }

    fetch("https://all-the-way-backend.azurewebsites.net/api/leads", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
      }),
    }).then((response) => {
      if (response.ok) {
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setMessage("Tack för din anmälan");
      } else {
        console.error(response.error);
      }
    });
  };

  return (
    <div
      className={`${styles.container} ${center ? styles.center : ""} container`}
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
              <Checkbox
                name="acceptTerms"
                onChange={handleChangeAcceptTerms}
                value={acceptTerms}
                checked={acceptTerms}
              >
                Jag godkänner att mina personuppgifter hanteras enligt GDPR.
              </Checkbox>
            </div>
          </div>
        </form>
        <Button light text="Bli medlem" onClick={onPost}></Button>
        {message && <div className={styles.message}>{message}</div>}
      </div>
    </div>
  );
};

export default Membership;
