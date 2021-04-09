import React, { Component } from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';

class LaunchCard extends Component {
    
    render() {
        return (
            <div className="launch-card">
                <CardFront />
                <CardBack />
            </div>
        )
    }
}

export default LaunchCard;