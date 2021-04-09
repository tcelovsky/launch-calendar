import React, { Component } from 'react';

class CardFront extends Component {

    render() {
        return (
            <div className='card-front'>
                {console.log(this.props)}
            </div>
        )
    }
}

export default CardFront;