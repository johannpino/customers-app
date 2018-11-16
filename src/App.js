import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import './App.css';
import HomeContainer from './containers/HomeContainer'
import CustomersContainer from './containers/CustomersContainer';

class App extends Component {

  renderHome = () => <h1>Home</h1>
  renderCustomerContainer = () => <CustomersContainer></CustomersContainer>
  renderCustomerListContainer = () => <h1>Home 3</h1>
  renderCustomerNewConstainer = () => <h1>Home 4</h1>

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/customers" component={this.renderCustomerContainer} />
          <Switch>
            <Route path="/customers/new" component={this.renderCustomerNewConstainer} />
            <Route path="/customers/:dni" component={this.renderCustomerListContainer} />
          </Switch>
        </div>

      </Router>
    );
  }
}

export default App;
