import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LaunchCard from '../components/LaunchCard';
import LoadMoreButton from '../components/LoadMoreButton';
import Search from './Search';

const itemsToShow = 12

class Launches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            launches: [],
            itemsToShow: itemsToShow
        };
    }

    generateLaunchCards = () => {
        if (this.state.launches.length > 0) {
            return this.state.launches.slice(0, this.state.itemsToShow).map(launch => 
                <Link key={launch.id} to={`/launches/${launch.id}`}>
                    {<LaunchCard key={launch.id} launch={launch} />}
                </Link>
            )
        } else {
        return this.props.launches.slice(0, this.state.itemsToShow).map(launch => 
            <Link key={launch.id} to={`/launches/${launch.id}`}>
                {<LaunchCard key={launch.id} launch={launch} />}
            </Link>
        )}
    }

    handleLoadMoreButton = (e) => {   
        e.preventDefault(); 
		this.setState(previousState => {      
			return {        
				itemsToShow: previousState.itemsToShow + itemsToShow     
			}  
		})
	} 
    
    handleSearch = (e, searchValue) => {
        e.preventDefault();
        const searchResult = []
        this.props.launches.map(launch => {
            if (launch.date.includes(searchValue) || launch.time.includes(searchValue) || launch.site.includes(searchValue) || launch.rocket.includes(searchValue) || launch.mission.includes(searchValue)) {
                searchResult.push(launch)
            }
        })
        this.setState(() => {      
			return {        
				launches: searchResult    
			}  
		})
    }

    render() {
        return (
            <main>
                <Search search={this.handleSearch}/>
                <div id="launch-cards">
                    {this.generateLaunchCards()}
                </div>
                <LoadMoreButton handleClick={this.handleLoadMoreButton}/>
            </main>
        )
    }
}

export default Launches;

