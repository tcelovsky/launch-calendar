import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LaunchCard from '../components/LaunchCard';
import LoadedAllResults from '../components/LoadedAllResults';
import LoadMoreButton from '../components/LoadMoreButton';
import Search from './Search';

const itemsToShow = 12

class Launches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: [],
            itemsToShow: itemsToShow
        };
    }

    generateLaunchCards = () => {
        if (this.state.searchResult.length > 0) {
            return this.state.searchResult.slice(0, this.state.itemsToShow).map(launch => 
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
        this.props.launches.forEach(launch => {
            if (launch.date.includes(searchValue) || launch.time.includes(searchValue) || launch.site.includes(searchValue) || launch.rocket.includes(searchValue) || launch.mission.includes(searchValue)) {
                searchResult.push(launch)
            }
        })
        this.setState(() => {      
			return {        
				searchResult: searchResult    
			}  
		})
    }

    render() {
        return (
            <main>
                <Search search={this.handleSearch}/>
                <div id="launch-cards">
                    {this.generateLaunchCards()}
                    {console.log(this.props.launches.length)}
                    {console.log(this.state.itemsToShow)}
                    {console.log(this.state.searchResult.length)}
                </div>
                <LoadMoreButton handleClick={this.handleLoadMoreButton}/>
                <LoadedAllResults />
            </main>
        )
    }
}

export default Launches;

