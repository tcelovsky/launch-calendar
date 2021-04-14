import '../styles/App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLaunches } from '../actions/launchActions';
import Launches from '../components/Launches';
import NavBar from '../components/NavBar';
import About from '../components/About';

class App extends Component {

  componentDidMount() {
    this.props.fetchLaunches()
  }
  
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1>Launch Calendar</h1>
            <NavBar />
          </header>
          <Route exact path='/' render={routerProps =>
	          <Launches {...routerProps} launches={this.props.launches}/>} />
          <Route path='/launches' render={routerProps =>
	          <Launches {...routerProps} launches={this.props.launches}/>} />
          <Route path='/about' component={About} />
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
