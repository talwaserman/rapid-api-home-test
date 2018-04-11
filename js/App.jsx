import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Landing, Login, Register, AppWrapper } from './Components';
import store from './store';
const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <AppWrapper>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route component={FourOhFour} />
          </Switch>
        </AppWrapper>
      </div>
    </Provider>
  </BrowserRouter>
);

App.propTypes = {
  match: PropTypes.shape({})
};

export default App;