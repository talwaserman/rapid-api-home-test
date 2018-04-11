import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Landing, Search } from './Components';
import store from './store';
const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/search" component={Search} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

App.propTypes = {
  match: PropTypes.shape({})
};

export default App;
