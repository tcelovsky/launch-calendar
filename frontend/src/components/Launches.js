import React, { Component } from 'react';
import LaunchCard from './LaunchCard';

class Launches extends Component {

    generateLaunchCards = () => {
        return this.props.launches.map(launch => launch={launch})
    }

    render() {
        return (
            <div className='launches-list'>
                {console.log(this.generateLaunchCards())}
            </div>
        )
    }
}

export default Launches;