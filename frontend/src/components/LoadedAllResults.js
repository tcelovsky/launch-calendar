import React from 'react';

const LoadedAllResults = props => {
    // Displaying "No more results to show." message if all launch cards have been loaded.
    if ((props.launches - props.itemsToShow + props.defaultItemsToShow) < props.defaultItemsToShow) {
        return (
            <div className="message">
                <p>No more results to show.</p>
            </div>
        )
    } 
    // Displaying "No more results to show." message if all seach results have been loaded.
    if (props.searchResult > 0 && (props.searchResult - props.itemsToShow) < props.defaultItemsToShow) {
        return (
            <div className="message">
                <p>No more results to show.</p>
            </div>
        )
    }
    // Not displaying "No more results to show." message if not all results/launch cards have been loaded.
    else {
        return null;
    }
};

export default LoadedAllResults;