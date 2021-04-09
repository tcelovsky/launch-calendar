import React, { Component } from 'react';
import LaunchCard from './LaunchCard';

class Launches extends Component {

    generateLaunchCards = () => {
        return this.props.launches.map(launch => <LaunchCard key={launch.id} card={launch} />)
    }

    render() {
        return (
            <div className='launches-list'>
                {this.generateLaunchCards()}
            </div>
        )
    }
}

export default Launches;