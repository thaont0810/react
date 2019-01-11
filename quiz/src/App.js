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

  nextQuestion = answerId => {
    this.changeAnswer(this.state.current, answerId);
    this.setState({
      current: this.state.current + 1
    });
  };

  changeAnswer = (questionId, answer) => {
    let { listAnswer } = this.state;
    listAnswer[questionId] = answer;
    this.setState({ listAnswer });
  };

  render() {
    const { listAnswer, current } = this.state;
    console.log(listAnswer);
    return (
      <div className="App">
        {this.state.listQuiz.map((quiz, index) => (
          <Quiz
            nextQuestion={this.nextQuestion}
            key={index}
            isActive={index == current ? true : false}
            quiz={quiz}
          />
        ))}

        <p>Total {this.state.total} questions</p>
      </div>
    );
  }
}

export default App;
