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

    static getDerivedStateFromProps(props, state) {
        if (props.launches !== state.launches) {
          return {
            launches: props.launches
            };
        }
        // Return null to indicate no change to state.
        return null;
    }

    generateLaunchCards = () => {
        if (this.state.searchResult.length > 0) {
            return this.state.searchResult.slice(0, this.state.itemsToShow).map(launch => 
                <Link key={launch.id} to={`/launches/${launch.id}`}>
                    {<LaunchCard key={launch.id} launch={launch} />}
                </Link>
            )
        } else {
        return this.state.launches.slice(0, this.state.itemsToShow).map(launch => 
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
        const lowerCaseSearchValue = searchValue.toLowerCase();
        this.state.launches.forEach(launch => {
            const date = launch.date.toLowerCase()
            const time = launch.time.toLowerCase()
            const site = launch.site.toLowerCase()
            const rocket = launch.rocket.toLowerCase()
            const mission = launch.mission.toLowerCase()

            if (date.includes(lowerCaseSearchValue) || time.includes(lowerCaseSearchValue) || site.includes(lowerCaseSearchValue) || rocket.includes(lowerCaseSearchValue) || mission.includes(lowerCaseSearchValue)) {
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
                </div>
                <LoadMoreButton handleClick={this.handleLoadMoreButton} launches={this.state.launches.length} itemsToShow={this.state.itemsToShow} searchResult={this.state.searchResult.length} defaultItemsToShow={itemsToShow}/>
                <LoadedAllResults launches={this.state.launches.length} itemsToShow={this.state.itemsToShow} searchResult={this.state.searchResult.length} defaultItemsToShow={itemsToShow}/>
            </main>
        )
    }
}

export default Launches;

