import React, { useState } from "react";

function FillInTheBlank(props) {
  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (answer.toLowerCase() === props.correctAnswer.toLowerCase()) {
      props.onCorrect();
    } else {
      props.onIncorrect();
    }
  };

  return (
    <div>
      <h2>{props.questionText}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={answer}
          onChange={handleAnswerChange}
          placeholder="Enter your answer here"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FillInTheBlank;
