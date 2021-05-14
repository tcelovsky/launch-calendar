import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LaunchCard from '../components/LaunchCard';
import LoadMoreButton from '../components/LoadMoreButton';

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
                <LoadMoreButton handleClick={this.handleClick}/>
            </main>
        )
    }
}

export default Launches;