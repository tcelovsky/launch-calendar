import React, { Component } from 'react';

class LaunchList extends Component {
    renderLaunches = () => {
        console.log(this.props)
        return this.props.launches.map(launch => 
        <ul key={launch.id}>
            <li>{launch.date}</li>
            <li>{launch.time}</li>
            <li>{launch.rocket}</li>
            <li>{launch.site}</li>
            <li>{launch.mission}</li>
        </ul>
        )
      }

    render() {
        return(
            <div>
                {this.renderLaunches()}
            </div>
        )
    }
}

export default LaunchList;