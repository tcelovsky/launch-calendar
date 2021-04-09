import React, { Component } from 'react';

class CardBack extends Component {

    render() {
        return (
            <div className="card-back">
                <p><span>Mission: </span>{this.props.mission}</p>
            </div>
        )
    }
}

export default CardBack;