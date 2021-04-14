import React, { Component } from 'react';

class AddToCalendarButton extends Component {
  
  render() {
    const date = this.props.date
    const time = this.props.time

    return (
        <div title="Add to Calendar" className="addeventatc">
        Add to Calendar
            <span className="start">04/28/2021 08:00 AM</span>
            <span className="timezone">America/New_York</span>
            <span className="title">{this.props.rocket} Launch</span>
            <span className="description">{this.props.mission} from {this.props.site}.</span>
        </div>
    );
    };
}

export default AddToCalendarButton;