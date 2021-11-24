import React, { useState } from "react";
import Button from "../../../common/Button";
import Checkbox from "../../../common/Checkbox";
import Input from "../../../common/Input";
import Textarea from "../../../common/Textarea";
import styles from "./contact.module.scss";

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

      track();

      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      setStatusMessage("");
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <section className={styles.contact}>
      <div className="container">
        <h1 className="white text-center">Kontakta oss</h1>
        <form className="mt-5">
          <div className="row">
            <div className="form-group col-md-4">
              <Input
                label="Namn*"
                type="text"
                value={name}
                name="name"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-4">
              <Input
                label="Telefonnummer"
                type="phone"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-4">
              <Input
                label="Email*"
                type="email"
                name="email"
                value={email}
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-12">
              <Textarea
                label="Meddelande*"
                name="message"
                value={message}
                required
                onChange={handleChange}
              ></Textarea>
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
          text={
            loading ? <i className="fas fa-spinner spinning"></i> : "Skicka"
          }
          name="send"
          onClick={postEmail}
          disabled={loading}
          light
        ></Button>
        {statusMessage && <div className={styles.message}>{statusMessage}</div>}
      </div>
    </section>
  );
};

export default Contact;
