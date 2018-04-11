require('./style.scss');
import React, {Component} from 'react';
import Header from '../Header';

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="app-wrapper">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default AppWrapper;
