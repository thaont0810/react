import React, { Component } from "react";
import ActivityItem from './components/GithubActivityItem';

const data = require('./data.json').slice(0, 4);

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false, // <~ set loading to false
      activities: []
    }
  }

  componentDidMount() {
    this.updateData();
  }

  componentWillReceiveProps(nextProps) {
    // Check to see if the requestRefresh prop has changed
    if (nextProps.requestRefresh !== this.props.requestRefresh) {
      this.setState({loading: true}, this.updateData);
    }
  }

  // Call out to github data and refresh directory
  updateData() {
    this.setState({
      loading: false,
      activities: data
          .sort(() => 0.5 - Math.random()).slice(0, 4)
    }, this.props.onComponentRefresh);
  }

  render() {
    const {loading, activities} = this.state;
    
    return (
      <div className="content">
        <div className="line"></div>
        {/* Show loading message if loading */}
        {loading && <div>Loading</div>}
        {/* Timeline item */}
        {activities.map((activity) => (
          <ActivityItem
            key={activity.id}
            activity={activity} />
        ))}
        
      </div>
    )
  }
}

export default Content
