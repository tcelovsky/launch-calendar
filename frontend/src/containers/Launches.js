import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LaunchCard from '../components/LaunchCard';

const itemsToShow = 12

class Launches extends Component {
    constructor(props) {
        super(props);
        this.state = {
          itemsToShow: itemsToShow
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
				itemsToShow: previousState.itemsToShow + itemsToShow     
			}  
		})
	} 
    
    render() {
        return (
            <main>
                <div id="launch-cards">
                    {this.generateLaunchCards()}
                </div>
                <div className="button-holder">
                    <button type="button" className="btn btn-default btn-sm" onClick={this.handleClick}>
                        <span className="glyphicon" aria-hidden="true"></span> Load More
                    </button>
                </div>
            </main>
        )
    }
}

export default Launches;