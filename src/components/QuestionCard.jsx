import React from 'react';

const QuestionCard = ({ questionNo, optionClicked, questions, selectedOptionId, highlightCorrect }) => {
  return (
    <div className='question-card'>
      <h2>Question {questionNo + 1} out of 5</h2>
      <h3 className='question-text'>{questions[questionNo].text}</h3>
      <ul>
        {
          questions[questionNo].options.map((option) => (
            <li
              key={option.id}
              onClick={() => optionClicked(option.id, option.isCorrect)}
              style={
                selectedOptionId === option.id 
                  ? { backgroundColor: option.isCorrect ? 'green' : 'red' } 
                  : highlightCorrect && option.isCorrect 
                  ? { backgroundColor: 'green' } 
                  : {}
              }
            >
              {option.text}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default QuestionCard;
