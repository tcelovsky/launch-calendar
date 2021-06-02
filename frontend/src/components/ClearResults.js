import React from 'react';

const ClearResults = props => {
  // Displaying Clear Search Results button if search results are being displayed.
  if (props.searchResult > 0) {
    return (
      <div className="button-holder">
          <button type="button" className="btn btn-default btn-sm" onClick={props.handleClick}>
              <span className="glyphicon" aria-hidden="true"></span>
              Clear Search Results
          </button>
      </div>
    )
  }
  // Not displaying Clear Search Results button if no search was made.
  else {
    return null;
  }
};

export default ClearResults;