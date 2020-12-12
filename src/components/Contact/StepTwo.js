import React from "react";

const StepTwo = ({ onChangeGender, onClickPrevious }) => {
  return (
    <React.Fragment>
      <div>
        <div>
          <input
            className="button-radio"
            name="gender"
            type="radio"
            id="genderFemale"
            value="Kvinna"
            onChange={(e) => onChangeGender(e)}
          />
          <label htmlFor="genderFemale">Kvinna</label>
        </div>
        <div>
          <input
            className="button-radio"
            name="gender"
            type="radio"
            id="genderMale"
            value="Man"
            onChange={(e) => onChangeGender(e)}
          />
          <label htmlFor="genderMale">Man</label>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-12">
          <button
            onClick={(e) => onClickPrevious(e, 2)}
            className="btn btn-secondary float-left "
          >
            Föreågende
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StepTwo;
