import React from 'react';

const LoadMoreButton = props => {
  // Not displaying Load More button if all search results have been loaded.
  if (props.searchResult > 0 && props.searchResult < props.itemsToShow) {
    return null;
  }
  // Displaying Load More button if not all launch cards have been loaded.
  if ((props.launches - props.itemsToShow + props.defaultItemsToShow) > props.defaultItemsToShow) {
    return (
      <div className="button-holder">
          <button type="button" className="btn btn-default btn-sm" onClick={props.handleClick}>
              <span className="glyphicon" aria-hidden="true"></span>
              Load More
          </button>
      </div>
    )
  }
  // Not displaying Load More button if all results/launch cards have been loaded.
  else {
    return null;
  }
};

export default LoadMoreButton;