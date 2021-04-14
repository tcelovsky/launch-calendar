import React, { Component } from 'react';
import AddToCalendarButton from './AddToCalendarButton';

class CardFront extends Component {

    render() {
        return (
            <div className="card-front">
                <ul>
                    <li><span>Date: </span>{this.props.date}</li>
                    <li><span>Time: </span>{this.props.time}</li>
                    <li><span>Site: </span>{this.props.site}</li>
                    <li><span>Rocket: </span>{this.props.rocket}</li>
                </ul>
                <AddToCalendarButton 
                    date={this.props.date}
                    time={this.props.time}
                    rocket={this.props.rocket}
                    site={this.props.site}
                    mission={this.props.mission}
                />
            </div>
        )
    }
}

export default CardFront;