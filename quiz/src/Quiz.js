import React, { Component } from "react";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: -1
    };
  }

  handleOnchangeAnswer = answer => {
    this.setState({
      answer
    });
  };

  handleNextQuestionClick = e => {
    e.preventDefault();
    let { nextQuestion } = this.props;
    let { answer } = this.state;
    nextQuestion(answer);
  };

  render() {
    const { quiz, isActive } = this.props;
    if (isActive) {
      return (
        <div className="question">
          <p>
            <span>{quiz.id}.</span>
            {quiz.name}
          </p>
          {quiz.options.map((option, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  this.handleOnchangeAnswer(index);
                }}
              >
                <label htmlFor={option}>
                  <input
                    type="radio"
                    onChange={() => {}}
                    checked={this.state.answer === index ? true : false}
                  />{" "}
                  {option}
                </label>
              </li>
            );
          })}
          <button className="button" onClick={this.handleNextQuestionClick}>
            Next
          </button>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Quiz;
