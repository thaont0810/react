import React, { Component } from "react";
import "./App.css";
import { listQuiz } from "./config/data.js";
import Quiz from "./Quiz";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listQuiz: listQuiz,
      total: listQuiz.length,
      listAnswer: [],
      current: 0
    };
  }

  nextQuestion = optionId => {
    this.changeAnswer(this.state.current, optionId);
    this.setState({
      current: this.state.current + 1
    });
  };

  prevQuestion = optionId => {
    this.changeAnswer(this.state.current, optionId);
    if (this.state.current === 0) {
    } else {
      this.setState({
        current: this.state.current - 1
      });
    }
  };

  changeAnswer = (questionId, option) => {
    let { listAnswer } = this.state;
    listAnswer[questionId] = option;
    this.setState({ listAnswer });
  };

  getTotalCorrect = () => {
    let { listQuiz, listAnswer } = this.state;
    const correct = listAnswer.filter((item, index) => {
      return item === listQuiz[index].correct;
    });
    // console.log(filter.length);
    this.setState({
      correct
    });
  };

  getNotDone = () => {
    let { listAnswer } = this.state;
    const notChosen = listAnswer.filter(item => {
      return item === -1;
    });
    this.setState({
      notChosen
    });
  };

  render() {
    const { listAnswer, current, total } = this.state;
    // console.log("listAnswer", listAnswer);

    if (current < total) {
      return (
        <div className="App">
          {this.state.listQuiz.map((quiz, index) => (
            <Quiz
              getNotDone={this.getNotDone}
              prevQuestion={this.prevQuestion}
              nextQuestion={this.nextQuestion}
              getTotalCorrect={this.getTotalCorrect}
              key={index}
              isActive={index === current ? true : false}
              quiz={quiz}
            />
          ))}
          <p>You are in question {current + 1}</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Finished!</p>
          <p>
            Correct: {this.state.correct.length} / Total {total}
            questions
          </p>
          <p> You missed {this.state.notChosen.length} questions</p>
        </div>
      );
    }
  }
}

export default App;
