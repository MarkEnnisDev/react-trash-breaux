import React from "react";
import MultipleChoice from "./MultipleChoice";
import FillInTheBlank from "./FRE";

function MyQuiz() {
  const question = {
    id: 1,
    text: "What is the capital of France?",
    options: [
      { id: "a", text: "London" },
      { id: "b", text: "Paris" },
      { id: "c", text: "Berlin" },
      { id: "d", text: "Madrid" },
    ],
  };

  const question2 = {
    id: 2,
    text: "Perform the operation",
    correctAnswer: "Paris",
  };

  const handleCorrect = () => {
    alert("Congratulations! Your answer is correct.");
  };

  const handleIncorrect = () => {
    alert("Sorry, your answer is incorrect.");
  };

  
   

  return (
    <div>
      <MultipleChoice questionId={question.id} questionText={question.text} options={question.options} />
      <FillInTheBlank
        questionText={question2.text}
        correctAnswer={question2.correctAnswer}
        onCorrect={handleCorrect}
        onIncorrect={handleIncorrect}
      />
    </div>
  );
}

export default MyQuiz;
