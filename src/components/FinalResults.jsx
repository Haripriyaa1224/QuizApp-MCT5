import React from 'react';

const FinalResults = ({ score, restartGame, questions, incorrectAnswers }) => {
  return (
    <div className='final-results'>
      <h1>Final Results</h1>
      <h2>{score} out of {questions.length} is correct - ({(score / questions.length) * 100}%)</h2>
      <button onClick={restartGame}>Restart</button>

      <h3>Incorrect Answers</h3>
      <ul>
        {incorrectAnswers.map((item, index) => (
          <li key={index}>
            <h4>Question: {item.question.text}</h4>
            <p className="incorrect-answer">Your Answer: {item.question.options.find(option => option.id === item.selectedOptionId).text}</p>
            <p className="correct-answer">Correct Answer: {item.question.options.find(option => option.isCorrect).text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinalResults;
