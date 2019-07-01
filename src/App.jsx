import React from 'react';
import Dashboard from './components/Dashboard'

//Redux 
import { Provider } from 'react-redux'
import store from './store'

//Router
import { Router } from 'react-router-dom'
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();



function App() {
  return (

    <Provider store={store}>
      <Router history={customHistory}>
        <div className="App">
          <Dashboard />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
