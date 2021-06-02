import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchValue: ''
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

    handleSubmit = (e) => {
        this.props.search(e, this.state.searchValue)
        this.setState(() => {      
			return {        
				searchValue: ''     
			}  
		})
    }

    render() {
        if (this.props.searchResult > 0) {
            return (
            <div className="clear-btn">
                <button type="button" className="btn btn-default btn-sm" onClick={this.props.clearSearch}>
                    <span className="glyphicon" aria-hidden="true"></span>
                    Clear Search Results
                </button>
            </div>
            )
        } else {
            return (
            <div className="search">
                <form className="search-form" onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" value={this.state.searchValue} onChange={(e) => this.handleChange(e)}></input>
                    <button type="submit" className="btn btn-default btn-sm">Search</button>
                </form>
            </div>
        )
        }
        
    }
}

export default Search