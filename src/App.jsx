import { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [currentQuestion , setCurentQuestion] =useState(0)

  function onChangeQuestion(){
    setCurentQuestion(currentQuestion +1);
  
  }
  function onCheckAns(option){
     if(option.isCorrect==true){
      console.log("correct ans")
     }else{console.log("wrong ans")}
  }

  const quizQuestions = [
    {
      question: "What is the complexity of binary search ?",
      options: [
        { answer: "O(n)", isCorrect: false },
        { answer: "O(logn)", isCorrect: true },
        { answer: "O(nlog)", isCorrect: false },
        { answer: "O(1)", isCorrect: false },
      ],
    },
    {
      question: "What is the complexity of linear search ?",
      options: [
        { answer: "O(n)", isCorrect: true },
        { answer: "O(logn)", isCorrect: false },
        { answer: "O(nlog)", isCorrect: false },
        { answer: "O(1)", isCorrect: false },
      ],
    },
    {
      question: "What is the complexity of mergesort ?",
      options: [
        { answer: "O(n)", isCorrect: false },
        { answer: "O(logn)", isCorrect: false },
        { answer: "O(nlog)", isCorrect: true },
        { answer: "O(1)", isCorrect: false },
      ],
    },
  ];

  return (
    <div className="card-wrapper">
      <div className="app">
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span> / {quizQuestions.length}
          </div>
          <div className="question-text">{quizQuestions[currentQuestion].question}</div>
        </div>
        <div className="answer-section">
          {quizQuestions[currentQuestion].options.map((option) => (
            <button onClick={() => onCheckAns(option)}>{option.answer}</button>
          ))}
        </div>
      </div>
      <div>
        <button onClick={onChangeQuestion}>Next</button>
      </div>
    </div>
  );
}

export default App;
