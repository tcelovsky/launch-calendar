import React, { Component } from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';

class LaunchCard extends Component {
    
    render() {
        return (
            <div className="launch-card">
                <CardFront 
                date={this.props.launch.date}
                time={this.props.launch.time}
                site={this.props.launch.site}
                rocket={this.props.launch.rocket}
                />
                <CardBack mission={this.props.launch.mission}/>
            </div>
        )
    }
}

export default LaunchCard;