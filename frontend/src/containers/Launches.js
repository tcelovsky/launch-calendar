import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LaunchCard from '../components/LaunchCard';
import LoadMoreButton from '../components/LoadMoreButton';
import Search from '../components/Search';

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
            if (launch.date.includes(searchValue)) {
                searchResult.push(launch)
            } else {
                this.generateLaunchCards()
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

const mapStateToProps = state => {
    return {
      launches: state.launches,
    }
}

export default connect(mapStateToProps)(Launches);

