import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LaunchCard from './LaunchCard';

class Launches extends Component {

    generateLaunchCards = () => {
        return this.props.launches.map(launch => 
            // <LaunchCard key={launch.id} launch={launch} />
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