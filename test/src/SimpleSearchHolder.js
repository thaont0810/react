import React, { Component } from "react";

class SimpleSearchHolder extends Component {
  state = { searchText: "" };
  handleSubmit = searchText => this.setState({ searchText });
  render() {
    const { Component } = this.props;
    const { searchText } = this.state;
    return (
      <div>
        <Component searchText={searchText} onSubmit={this.handleSubmit} />
        <div>You searched for: {searchText}</div>
      </div>
    );
  }
}
export default SimpleSearchHolder;
