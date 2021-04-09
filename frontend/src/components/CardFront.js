import React, { Component } from 'react';

class CardFront extends Component {

    render() {
        return (
            <div className="card-front">
                <ul>
                    <li>{this.props.date}</li>
                    <li>{this.props.time}</li>
                    <li>{this.props.site}</li>
                    <li>{this.props.rocket}</li>
                </ul>
            </div>
        )
    }
}

export default CardFront;