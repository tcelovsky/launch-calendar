import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LaunchCard from './LaunchCard';

class Launches extends Component {
    constructor(props) {
        super(props);
        this.state = {
          itemsToShow: 12
        };
    }

    generateLaunchCards = () => {
        return this.props.launches.slice(0, this.state.itemsToShow).map(launch => 
            <Link key={launch.id} to={`/launches/${launch.id}`}>
                {<LaunchCard key={launch.id} launch={launch} />}
            </Link>
        )
    }

    handleClick = (e) => {   
        e.preventDefault(); 
		this.setState(previousState => {      
			return {        
				itemsToShow: previousState.itemsToShow + 12     
			}    
		})  
	} 
    
    render() {
        return (
            <div id="launch-cards">
                {this.generateLaunchCards()}
                <button className="load-more-button" onClick={this.handleClick}>Load More</button>
            </div>
        )
    }
}

export default Launches;