import React from "react";

const StepFive = ({
  onChangeDescription,
  handlePrevious,
  handleSubmit,
  description,
}) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="form-group col-md-12">
          <label className="text-white" htmlFor="description">
            Vad vill du ha ut av coachningen?
          </label>
          <textarea
            className="form-control"
            id="description"
            onChange={onChangeDescription}
          >
            {description}
          </textarea>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-12">
          <button
            className="btn btn-secondary float-left"
            onClick={(e) => handlePrevious(e, 5)}
          >
            Föreågende
          </button>
          <button
            className="btn btn-primary float-right"
            onClick={(e) => handleSubmit(e)}
          >
            Skicka
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StepFive;
