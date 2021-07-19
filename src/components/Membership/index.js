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
  const [loading, setLoading] = useState(false);

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

  const postLead = async () => {
    var formData = new FormData();
    formData.append("entry.17082701", firstName);
    formData.append("entry.1001144049", lastName);
    formData.append("entry.2090741493", phoneNumber);

    await fetch(
      "https://docs.google.com/forms/u/6/d/e/1FAIpQLSc0L1No6dkhY5XdPvx28SEY3ZSIVGrqN027FJT72fZRYY6QUg/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    );

    try {
      const response = await fetch(
        "https://all-the-way-backend.azurewebsites.net/api/leads",
        {
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
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setMessage("Tack för din anmälan");
      setLoading(false);
    } catch (err) {
      console.log(err);
      setMessage(
        "Ett fel uppstod. Vänligen försök igen eller kontakta info@allthewaygym.se om problemet kvarstår."
      );
      setLoading(false);
    }
  };

  const onPost = async () => {
    if (!firstName || !lastName || !phoneNumber) {
      setMessage("Vänligen fyll i alla fält");
      return;
    }

    if (!acceptTerms) {
      setMessage("Vänligen acceptera våra villkor");
      return;
    }

    setLoading(true);
    await postLead();
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
          <span className={styles.light}>Personlig Hälsoplan</span>
        </h1>
        <p className="white">
          På en personlig hälsoplan går vi igenom din bakgrund, målsättningar,
          eventuella skador och dina hinder. Därifrån hittar vi en lösning som
          gör att du når din målsättning.
        </p>
        <form className="mt-5">
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
        <Button
          light
          text={
            loading ? (
              <i className="fas fa-spinner spinning"></i>
            ) : (
              "Anmäl intresse"
            )
          }
          onClick={onPost}
          disabled={loading}
          className={styles.button}
        ></Button>
        {message && <div className={styles.message}>{message}</div>}
      </div>
    </div>
  );
};

export default Membership;
