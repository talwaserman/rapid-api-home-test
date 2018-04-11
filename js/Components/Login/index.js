require('./style.scss');
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionCreators from '../AppWrapper/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  componentWillUnmount() {
    this.setState({
      email: '',
      password: ''
    })
  }

  savePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  saveEmail = event => {
    this.setState({
      email: event.target.value
    })
  }

  submitForm = event => {
    this.props.userSignIn(this.state);
  }

  render() {
    return(
      <div className="login-page">
        <form onSubmit={(e) => {this.submitForm(); e.preventDefault();}}>
          <h1>Login</h1>
          <input type="text" placeholder="Email" value={this.state.email} onChange={this.saveEmail}/>
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.savePassword}/>
          <button type="submit">Let me in.</button>
          <div className="custom-link"><Link to={'/register'}>oh you didn't register ?</Link></div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.UserStatusReducer.userData,
});
const mapDispatchToProps = dispatch => () => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
