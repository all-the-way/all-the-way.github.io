import React from "react";

const StepFour = ({
  handlePrevious,
  handleNext,
  onChangeFirstName,
  onChangeLastName,
  onChangeEmail,
  onChangePhone,
  firstName,
  lastName,
  email,
  phone,
}) => {
  return (
    <React.Fragment>
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
            onChange={(e) => onChangeFirstName(e)}
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
            onChange={(e) => onChangeLastName(e)}
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
            onChange={(e) => onChangeEmail(e)}
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
            onChange={(e) => onChangePhone(e)}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-12">
          <button
            className="btn btn-secondary float-left"
            onClick={(e) => handlePrevious(e, 4)}
          >
            Föreågende
          </button>
          <button
            className="btn btn-primary float-right"
            onClick={(e) => handleNext(e, 4)}
          >
            Nästa
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StepFour;
