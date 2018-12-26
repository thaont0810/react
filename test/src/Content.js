import React, { Component, Fragment } from "react";
import ActivityItem from "./components/ActivityItem";

class Content extends Component {

  render() {
    const { activities } = this.props;
    // const activitiesArr = this.props.activities;
    // console.log(activities);

    return (
      <Fragment>
        <div className="content">
          <div className="line" />
          {activities.map((activity) => {
            return <ActivityItem 
            key={activity.user.id} 
            activity={activity} />;
          })}
        </div>
      </Fragment>
    );
  }
}
export default Content;
