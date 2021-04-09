import React, { Component } from 'react';

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
            </div>
        )
    }
}

export default CardFront;