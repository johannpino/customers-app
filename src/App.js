import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import './App.css';
import HomeContainer from './containers/HomeContainer'
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';

class App extends Component {

  // renderHome = () => <h1>Home</h1>
  renderCustomersContainer = () => <CustomersContainer></CustomersContainer>
  // renderCustomerListContainer = () => <h1>Home 3</h1>
  renderCustomerNewConstainer = () => <h1>Home 4</h1>

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/customers" component={this.renderCustomersContainer} />
          <Switch>
            <Route path="/customers/new" component={NewCustomerContainer} />
            <Route path="/customers/:dni" 
              render={props => <CustomerContainer {...props} dni={props.match.params.dni} /> } />
          </Switch>
        </div>

      </Router>
    );
  }
}

export default App;
