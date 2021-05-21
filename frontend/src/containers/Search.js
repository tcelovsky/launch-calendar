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

    handleClick = (e) => {
        this.props.search(e, this.state.searchValue)
        this.setState(() => {      
			return {        
				searchValue: ''     
			}  
		})
    }

    render() {
        return (
            <div className="search">
                <form className="search-form">
                    <input type="text" value={this.state.searchValue} onChange={(e) => this.handleChange(e)}></input>
                    <button type="button" className="btn btn-default btn-sm" onClick={(e) => this.handleClick(e)}>Search</button>
                </form>
            </div>
        )
    }
}

export default Search