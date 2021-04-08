import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLaunches } from './actions/launchActions';

class App extends Component {

  componentDidMount() {
    this.props.fetchLaunches()
    console.log(this.props)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">Launch Calendar</header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    launches: state.launches,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchLaunches: () => dispatch(fetchLaunches())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
