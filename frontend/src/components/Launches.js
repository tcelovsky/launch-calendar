import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LaunchCard from './LaunchCard';

class Launches extends Component {

    generateLaunchCards = () => {
        var size = 12; // Returns first 12 entries only
        return this.props.launches.slice(0, size).map(launch => 
            <Link key={launch.id} to={`/launches/${launch.id}`}>
                {<LaunchCard key={launch.id} launch={launch} />}
            </Link>
        )
    }

    render() {
        return (
            <div id="launch-cards">
                {this.generateLaunchCards()}
            </div>
        )
    }
}

export default Launches;