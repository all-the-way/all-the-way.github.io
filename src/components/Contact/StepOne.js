import React from "react";

const StepOne = ({ onChangeGoal }) => {
  return (
    <div>
      <h3 className="text-white mb-5">Vad är ditt mål?</h3>
      <div>
        <input
          className="button-radio"
          type="radio"
          name="entry.1021354504"
          value="Gå ned i vikt"
          onChange={(e) => onChangeGoal(e)}
          id="goalLoseWeight"
        />
        <label htmlFor="goalLoseWeight">Gå ned i vikt</label>
      </div>
      <div>
        <input
          className="button-radio"
          type="radio"
          name="entry.1021354504"
          value="Gå upp i vikt"
          onChange={(e) => onChangeGoal(e)}
          id="goalGainWeight"
        />
        <label htmlFor="goalGainWeight">Gå upp i vikt</label>
      </div>
      <div>
        <input
          className="button-radio"
          type="radio"
          name="entry.1021354504"
          value="Bygga muskler"
          onChange={(e) => onChangeGoal(e)}
          id="goalMuscles"
        />
        <label htmlFor="goalMuscles">Bygga muskler</label>
      </div>
      <div>
        <input
          className="button-radio"
          type="radio"
          name="entry.1021354504"
          value="Livsstilsförändring"
          onChange={(e) => onChangeGoal(e)}
          id="goalLifestyle"
        />
        <label htmlFor="goalLifestyle">Livsstilsförändring</label>
      </div>
      <div>
        <input
          className="button-radio"
          type="radio"
          name="entry.1021354504"
          value="Bli smärtfri"
          onChange={(e) => onChangeGoal(e)}
          id="goalPainless"
        />
        <label htmlFor="goalPainless">Bli smärtfri</label>
      </div>
    </div>
  );
};

export default StepOne;
