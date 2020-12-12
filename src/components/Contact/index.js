import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";

const Contact = () => {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleNext = (e, currentStep) => {
    e.preventDefault();
    setStep(currentStep + 1);
  };

  const handlePrevious = (e, currentStep) => {
    e.preventDefault();
    setStep(currentStep - 1);
  };

  const handleChangeGoal = (e) => {
    setGoal(e.target.value);
    setStep(2);
  };

  const handleChangeGender = (e) => {
    setGender(e.target.value);
    setStep(3);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleChangeWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleChangeLength = (e) => {
    setLength(e.target.value);
  };

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

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("entry.327332031", goal);
    formData.append("entry.2096979562", gender);
    formData.append("entry.1378902402", age);
    formData.append("entry.884416499", weight);
    formData.append("entry.844081402", length);
    formData.append("entry.994694613", firstName);
    formData.append("entry.1870770121", lastName);
    formData.append("entry.1999044351", email);
    formData.append("entry.1736229252", phone);
    formData.append("entry.522566656", description);

    fetch(
      "https://docs.google.com/forms/u/5/d/e/1FAIpQLSeEiKVe8tPSZc7JseRlJ6m1y6gYVHPKdiUDhZ-iPZIYziXjJQ/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    ).then(() => setStep(6));
  };
  return (
    <section id="intresseanmalan" className="signup-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <h2 className="text-white mb-5 header">
              Passa på innan det är för sent
            </h2>
            <h3 className="text-white mb-5 header">Dörrarna stängs i maj</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
