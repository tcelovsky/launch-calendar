import '../styles/App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLaunches } from '../actions/launchActions';
import Launches from '../components/Launches';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Header from '../components/Header';

class App extends Component {

  componentDidMount() {
    this.props.fetchLaunches()
  }
  
  render() {
    return (
        <div className="App">
          <Header />
          <NavBar />
          <Switch>
            <Route exact path='/' render={routerProps =>
	            <Launches {...routerProps} launches={this.props.launches}/>} />
            <Route path='/launches' render={routerProps =>
	            <Launches {...routerProps} launches={this.props.launches}/>} />
            <Route path='/about' component={About} />
          </Switch>
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
