import React, { Component } from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';

class LaunchCard extends Component {

    generateLaunchCards = () => {
        return this.props.launches.map(launch => launch={launch})
    }
    
    render() {
        return (
            <div className="launch-card">
                {console.log(this.generateLaunchCards())}
                <CardFront />
                <CardBack />
            </div>
        )
    }
}

export default LaunchCard;