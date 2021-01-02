import React, { useState } from "react";
import logo from "./icon_white.png";

const Contact = ({ fullHeight }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phone) {
      setHasErrors(true);
      return;
    }

    var formData = new FormData();
    formData.append("entry.17082701", firstName);
    formData.append("entry.1001144049", lastName);
    formData.append("entry.125076387", email);
    formData.append("entry.2090741493", phone);

    fetch(
      "https://docs.google.com/forms/u/6/d/e/1FAIpQLSc0L1No6dkhY5XdPvx28SEY3ZSIVGrqN027FJT72fZRYY6QUg/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    ).then(() => setSubmitted(true));
  };

  return (
    <section
      id="intresseanmalan"
      className={`${"signup-section"} ${fullHeight ? "logo" : ""}`}
    >
      <div className={`container ${fullHeight ? "full-height" : ""}`}>
        {fullHeight && (
          <div className="row d-flex justify-content-center">
            <img src={logo} alt="Logotype för All The Way"></img>
          </div>
        )}
        {!submitted && (
          <React.Fragment>
            <div className="row">
              <div className="col-md-10 col-lg-8 mx-auto text-center">
                <h2 className="heading text-white">
                  Fyll i din intresseanmälan
                </h2>
                <h3
                  className="text-white text-uppercase mb-5"
                  style={{ fontSize: 16 }}
                >
                  Begränsat antal platser
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label className="text-white" htmlFor="firstName">
                  Förnamn
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => handleChangeFirstName(e)}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label className="text-white" htmlFor="lastName">
                  Efternamn
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => handleChangeLastName(e)}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label className="text-white" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => handleChangeEmail(e)}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label className="text-white" htmlFor="phone">
                  Telefon
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  value={phone}
                  onChange={(e) => handleChangePhone(e)}
                  required
                />
              </div>
            </div>
            {hasErrors && (
              <p className="text-white">
                Vänligen fyll i alla fält innan du skickar din ansökan.
              </p>
            )}
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-primary float-right"
                onClick={(e) => handleSubmit(e)}
              >
                Skicka
              </button>
            </div>
          </React.Fragment>
        )}

        {submitted && (
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto text-center">
              <h2 className="heading text-white">
                Tack för din intresseanmälan!
              </h2>
              <p className="text-white">Vi återkopplar inom 48 timmar.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
