import React, { Component } from 'react';
import { DateTime } from "luxon";

class AddToCalendarButton extends Component {
  
  parseDate = (date) => {
    const dateInMillis = Date.parse(date)
    return DateTime.fromMillis(dateInMillis).toISODate()
  }

  parseTime = (time) => {
    switch(time) {
        case 'TBD':
            return '8:00 am';
        default:
            return time;
    }
  }

  concatMission = (str) => {
    if (str[str.length-1] === ".")
    str = str.slice(0,-1);
    return str
  }

  render() {
    const date = this.parseDate(this.props.date)
    const time = this.parseTime(this.props.time)
    const mission = this.concatMission(this.props.mission)

    return (
        <div title="Add to Calendar" className="addeventatc">
        Add to Calendar
            <span className="start">{date} {time}</span>
            <span className="timezone">America/New_York</span>
            <span className="title">{this.props.rocket} Launch</span>
            <span className="description">{mission} from {this.props.site}.</span>
        </div>
    );
    };
}

export default AddToCalendarButton;