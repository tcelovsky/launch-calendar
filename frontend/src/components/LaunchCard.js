import React, { Component } from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';

class LaunchCard extends Component {

    generateLaunchCards = () => {
        return console.log(this.props) 
    }
    
    render() {
        return (
            <div className="launch-card">
                {this.generateLaunchCards()}
                <CardFront />
                <CardBack />
            </div>
        )
    }
}

export default LaunchCard;