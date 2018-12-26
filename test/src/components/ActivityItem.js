import React, { Component } from "react";

class ActivityItem extends Component {
  render() {
    
    const { activity } = this.props;
    // const activity = this.props.activityItem;
    // console.log(activity);
    
    return (
      <div className="item">
        <div className="avatar">
          <img
            src= {activity.user.avatar}
            alt= {activity.text}
          />
          {activity.user.name}
        </div>
        <span className="time">
          {activity.timestamp} 
        </span> 
        <p> {activity.text} </p>
        <div className="commentCount"> 
          {activity.comments.length} 
        </div>
      </div>
    );
  }
}

export default ActivityItem;
