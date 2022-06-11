import React, { useState } from "react";
import Button from "../../../common/Button";
import Checkbox from "../../../common/Checkbox";
import Input from "../../../common/Input";
import Spinner from "../../../common/Spinner";
import Content from "../../Content";
import image from "./image.jpg";
import * as styles from "./membership.module.css";

const Membership = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [statusMessage, setMessage] = useState("");
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

  const track = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "form_submission",
        formType: "php",
      });
    }
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

      track();

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

  const handlePost = async () => {
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
      id="medlemskap"
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Content>
        <h2>Intresserad av att bli medlem?</h2>
        <p>
          Varje medlem börjar med att göra en anpassad personlig hälsoplan där
          vi går igenom kompletterande hälsoinformation som din; bakgrund,
          målsättning, förutsättningar och skador för att anpassa din start
          efter dina förutsättningar och behov.{" "}
        </p>
        <Input
          label="Förnamn*"
          type="text"
          value={firstName}
          onChange={handleChange}
          name="firstName"
          required
        />
        <Input
          label="Efternamn*"
          type="text"
          value={lastName}
          onChange={handleChange}
          name="lastName"
          required
        />
        <Input
          label="Telefonnummer*"
          type="phone"
          value={phoneNumber}
          onChange={handleChange}
          name="phoneNumber"
        />
        <div style={{ margin: "20px 0" }}>
          <Checkbox
            name="acceptTerms"
            onChange={handleChangeAcceptTerms}
            value={acceptTerms}
            checked={acceptTerms}
          >
            Jag godkänner att mina personuppgifter hanteras enligt GDPR.
          </Checkbox>
        </div>
        <Button name="send" onClick={handlePost} disabled={loading}>
          {loading ? <Spinner /> : "Ansök om medlemskap"}
        </Button>
        {statusMessage && (
          <div style={{ margin: "20px 0" }}>{statusMessage}</div>
        )}
      </Content>
    </div>
  );
};

export default Membership;
