import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import LaunchCard from '../components/LaunchCard';



class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchValue: '',
        //   searchResult: []
        };
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState(() => {      
			return {        
				searchValue: e.target.value     
			}  
		})
    }

    handleClick = (e) => {
        // this.search()
        this.props.search(e, this.state.searchValue)
        this.setState(() => {      
			return {        
				searchValue: ''     
			}  
		})
    }

    // search = () => {
    //     const searchResult = []
    //     this.props.launches.map(launch => {
    //         if (launch.date === this.state.searchItems) {
    //             return searchResult.push(launch)
    //         }
    //     })
    //     this.setState(() => {      
	// 		return {        
	// 			searchResult: searchResult    
	// 		}  
	// 	})
    // }

    // generateLaunchCards = () => {
    //     return this.state.searchResult.map(launch => 
    //         <Link key={launch.id} to={`/launches/${launch.id}`}>
    //             {<LaunchCard key={launch.id} launch={launch} />}
    //         </Link>
    //     )
    // }

    render() {
        return (
            <div className="search">
                <form className="search-form">
                    <input type="text" value={this.state.searchValue} onChange={(e) => this.handleChange(e)}></input>
                    <button type="button" className="btn btn-default btn-sm" onClick={(e) => this.handleClick(e)}>Search</button>
                </form>
            </div>
        )
        // if (this.state.searchResult.length > 1) {
        //     return (
        //             <div id="launch-cards">
        //                 {this.generateLaunchCards()}
        //             </div>
        //     )
        // } else {
        //     return (
        //         <div className="search">
        //             <form className="search-form">
        //                 <input type="text" onChange={(e) => this.handleChange(e)}></input>
        //                 <button type="button" className="btn btn-default btn-sm" onClick={(e) => this.handleClick(e)}>Search</button>
        //             </form>
        //         </div>
        //     )
        // }
    }
}

export default Search