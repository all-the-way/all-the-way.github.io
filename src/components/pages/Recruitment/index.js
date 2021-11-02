import React, { useState } from "react";
import Button from "../../common/Button";
import Checkbox from "../../common/Checkbox";
import Input from "../../common/Input";
import Textarea from "../../common/Textarea";
import Header from "../About/Header";
import header from "./header.png";
import styles from "./recruitment.module.scss";

const Recruitment = () => {
  const [memberName, setMemberName] = useState("");
  const [friendName, setFriendName] = useState("");
  const [friendPhone, setFriendPhone] = useState("");
  const [trainingReason, setTrainingReason] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const setState = {
    memberName: setMemberName,
    friendName: setFriendName,
    friendPhone: setFriendPhone,
    trainingReason: setTrainingReason,
  };

  const handleChange = (e) => {
    setState[e.target.name](e.target.value);
  };

  const handleChangeAcceptTerms = (e) => {
    setAcceptTerms(e.target.checked);
  };

  const postEmail = async () => {
    if (!friendName || !friendPhone || !memberName || !trainingReason) {
      setStatusMessage("Vänligen fyll i alla fält");
      return;
    }

    if (!acceptTerms) {
      setStatusMessage("Vänligen acceptera våra villkor");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://all-the-way-backend.azurewebsites.net/api/emails/recruit",
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            memberName,
            friendName,
            friendPhone,
            trainingReason,
          }),
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      setMemberName("");
      setFriendName("");
      setFriendPhone("");
      setTrainingReason("");
      setStatusMessage("");
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <>
      <Header
        heading={
          <div className="container">
            <h1 className={styles.heading}>Rekommendera oss till en vän</h1>
          </div>
        }
        image={header}
      ></Header>
      <section>
        <div className={`container wide ${styles.container}`}>
          <div>
            <h2>
              <span className={styles.big}>Värdecheck</span>{" "}
              <span className={styles.small}>online</span>
            </h2>
            <p>
              Vi är oerhört glada att du vill rekommendera oss till din vän.
            </p>
          </div>
          <div>
            <div className="form-group">
              <Input
                label="Ditt för- och efternamn"
                type="text"
                name="memberName"
                value={memberName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <Input
                label="Vännens för- och efternamn"
                type="text"
                name="friendName"
                value={friendName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <Input
                label="Vännens telefonnummer"
                type="phone"
                name="friendPhone"
                value={friendPhone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <Textarea
                label="Varför ska din vän träna hos oss?"
                name="trainingReason"
                value={trainingReason}
                required
                onChange={handleChange}
              ></Textarea>
            </div>

            <div className="form-group">
              <Checkbox
                name="acceptTerms"
                onChange={handleChangeAcceptTerms}
                value={acceptTerms}
                checked={acceptTerms}
              >
                Jag godkänner att mina personuppgifter hanteras enligt GDPR.
              </Checkbox>
            </div>
            <Button
              text={
                loading ? <i className="fas fa-spinner spinning"></i> : "Skicka"
              }
              name="send"
              onClick={postEmail}
              disabled={loading}
              light
            ></Button>
            {statusMessage && (
              <div className={styles.message}>{statusMessage}</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Recruitment;
