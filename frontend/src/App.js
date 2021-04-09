import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLaunches } from './actions/launchActions';
import LaunchList from './containers/launchList';

class App extends Component {

  componentDidMount() {
    this.props.fetchLaunches()
    // console.log(this.props)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">Rocket Launch Calendar</header>
        <LaunchList launches={this.props.launches} />
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
