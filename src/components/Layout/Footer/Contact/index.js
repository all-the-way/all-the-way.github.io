import React, { useState } from "react";
import Input from "../../../common/Input";
import Checkbox from "../../../common/Checkbox";
import Button from "../../../common/Button";
import Spinner from "../../../common/Spinner";

const Contact = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const setState = {
    name: setName,
    phoneNumber: setPhoneNumber,
    email: setEmail,
    message: setMessage,
  };

  const handleChange = (e) => {
    setStatusMessage("");
    setState[e.target.name](e.target.value);
  };

  const handleChangeAcceptTerms = (e) => {
    setAcceptTerms(e.target.checked);
  };

  const track = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "form_submission",
        formType: "contact",
      });
    }
  };

  const postEmail = async () => {
    if (!name || !email || !message) {
      setStatusMessage("Vänligen fyll i fälten markerade med *");
      return;
    }

    if (!acceptTerms) {
      setStatusMessage("Vänligen acceptera våra villkor");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://all-the-way-backend.azurewebsites.net/api/emails",
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            message: message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      setStatusMessage("Meddelandet skickades!");
      track();

      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      setStatusMessage("");
      setLoading(false);
    } catch (err) {
      setStatusMessage(
        "Ett fel uppstod. Vänligen försök igen eller kontakta info@allthewaygym.se om problemet kvarstår."
      );
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div id="kontakt">
      <h2>Kontakta oss via mail</h2>
      <Input
        label="Namn*"
        type="text"
        value={name}
        onChange={handleChange}
        name="name"
        required
      />
      <Input
        label="Telefonnummer"
        type="phone"
        value={phoneNumber}
        onChange={handleChange}
        name="phoneNumber"
      />
      <Input
        label="Email*"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
      />
      <Input
        label="Meddelande*"
        type="textarea"
        value={message}
        onChange={handleChange}
        name="message"
        required
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
      <Button name="send" onClick={postEmail} disabled={loading}>
        {loading ? <Spinner /> : "Skicka"}
      </Button>
      {statusMessage && <div style={{ margin: "20px 0" }}>{statusMessage}</div>}
    </div>
  );
};

export default Contact;
