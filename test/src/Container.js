import React, { Component } from "react";
// import Header from "./Header";
import Header from "./HeaderSearch";
import Content from './Content07';
import Footer from './components/Footer';

// An async request
const data = require('./data.json');
const fetchEvents = () => Promise.resolve(data)
                      .then(json => json.slice(0, 4))

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {refreshing: false}
  }

  // Bound to the refresh button
  refresh() {
    this.setState({refreshing: true})
  }

  // Callback from the `Content` component
  onComponentRefresh() {
    this.setState({refreshing: false});
  }

  render() {
    const {refreshing} = this.state;
    return (
      <div className='notificationsFrame'>
        <div className='panel'>
          <Header title="Github activity" />
          {/* refreshing is the component's state */}
          <Content
            onComponentRefresh={this.onComponentRefresh.bind(this)}
            requestRefresh={refreshing}
            fetchData={fetchEvents} />
          {/* A container for styling */}
          <Footer>
            <button onClick={this.refresh.bind(this)}>
              <i className="fa fa-refresh" />
              Refresh
            </button>
          </Footer>
        </div>
      </div>
    )
  }
}

export default Container;