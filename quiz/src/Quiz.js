import React, { Component, Fragment } from "react";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: -1
    };
  }

  handleOnchangeAnswer = option => {
    this.setState({
      option
    });
  };

  handleNextQuestionClick = e => {
    e.preventDefault();
    let { nextQuestion } = this.props;
    let { option } = this.state;
    nextQuestion(option);
    this.props.getTotalCorrect();
    this.props.getNotDone();
  };

  handlePrevQuestionClick = e => {
    e.preventDefault();
    let { prevQuestion } = this.props;
    let { option } = this.state;
    prevQuestion(option);
    this.props.getTotalCorrect();
    this.props.getNotDone();
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
          <ul>
            {quiz.options.map((option, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    this.handleOnchangeAnswer(index);
                  }}
                >
                  <label>
                    <input
                      type="radio"
                      onChange={() => {}}
                      checked={this.state.option === index ? true : false}
                    />
                    {option}
                  </label>
                </li>
              );
            })}
          </ul>
          <div>
            <button className="button" onClick={this.handlePrevQuestionClick}>
              Prev
            </button>
            <button className="button" onClick={this.handleNextQuestionClick}>
              Next
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Quiz;
