import React, { Component } from 'react';

class CardFront extends Component {

    render() {
        return (
            <div className="card-front">
                <ul>
                    <li>Date: {this.props.date}</li>
                    <li>Time: {this.props.time}</li>
                    <li>Site: {this.props.site}</li>
                    <li>Rocket: {this.props.rocket}</li>
                </ul>
            </div>
        )
    }
}

export default CardFront;