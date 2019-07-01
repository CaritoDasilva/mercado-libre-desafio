import React from 'react';
import Dashboard from './components/Dashboard'
import Products from './components/Products'
import Item from './components/Item'

//Redux 
import { Provider } from 'react-redux'
import store from './store'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";
const history = createBrowserHistory()



function App() {
  return (

    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Dashboard />
          <div className="containerDashboard">
            <Switch>
              <Route exact path="/item/:id" component={Item}></Route>
              <Route path="/" component={Products}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}



export default App;
