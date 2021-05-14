import React from 'react';

const LoadMoreButton = props => {
  return (
    <div className="button-holder">
        <button type="button" className="btn btn-default btn-sm" onClick={props.handleClick}>
            <span className="glyphicon" aria-hidden="true"></span>
            Load More
        </button>
    </div>
  );
};

export default LoadMoreButton;