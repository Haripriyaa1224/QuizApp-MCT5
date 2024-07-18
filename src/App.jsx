import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import "./App.css";
import FinalResults from "./components/FinalResults";
import { questions } from "./components/Questions";

const App = () => {
  const [showFinalResults, setShowFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [questionNo, setQuestionNo] = useState(0);
  const [questionsArray, setQuestionsArray] = useState(questions);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [highlightCorrect, setHighlightCorrect] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  const optionClicked = (id, isCorrect) => {
    setSelectedOptionId(id);
    if (isCorrect) {
      setScore(score + 1);
      moveToNextQuestion();
    } else {
      
      setIncorrectAnswers(prev => [...prev, { question: questionsArray[questionNo], selectedOptionId: id }]);
      setTimeout(() => {
        setHighlightCorrect(true);
        moveToNextQuestion();
      }, 1000); // 1 seconds delay to show correct answer
    }
  };

  const moveToNextQuestion = () => {
    setTimeout(() => {
      setQuestionNo(questionNo + 1);
      setSelectedOptionId(null);
      setHighlightCorrect(false);

      if (questionNo === questionsArray.length - 1) {
        setShowFinalResults(true);
      }
    }, 1000); // Delay for 1 second before moving to the next question
  };

  const restartGame = () => {
    const shuffledQuestions = questions
      .map((question) => ({ question, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ question }) => question);

    setScore(0);
    setQuestionNo(0);
    setShowFinalResults(false);
    setQuestionsArray(shuffledQuestions);
    setIncorrectAnswers([]);
  };

  return (
    <div className="app">
      <h1>Quiz</h1>
      <h2>Current Score: {score}</h2>

      {showFinalResults ? (
        <FinalResults
          score={score}
          restartGame={restartGame}
          questions={questionsArray}
          incorrectAnswers={incorrectAnswers}
        />
      ) : (
        <QuestionCard
          questionNo={questionNo}
          optionClicked={optionClicked}
          questions={questionsArray}
          selectedOptionId={selectedOptionId}
          highlightCorrect={highlightCorrect}
        />
      )}
    </div>
  );
};

export default App;
