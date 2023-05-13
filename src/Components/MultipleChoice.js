import React, { useState } from "react";

function MultipleChoice(props) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>{props.questionText}</h2>
      <form>
        {props.options.map((option) => (
          <div key={option.id}>
            <input
              type="radio"
              name={props.questionId}
              value={option.id}
              checked={selectedOption === option.id}
              onChange={handleOptionChange}
            />
            <label>{option.text}</label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default MultipleChoice;
