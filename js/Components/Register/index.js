require('./style.scss');
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionCreators from '../AppWrapper/actions';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      passwordValidation: ''
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

  savePasswordValidation = event => {
    this.setState({
      passwordValidation: event.target.value
    })
  }

  saveEmail = event => {
    this.setState({
      email: event.target.value
    })
  }

  submitForm = event => {
    if (this.state.email == '' || this.state.password == '') {
      alert('please fill all the fields.');
      return;
    }

    if (this.state.password !== this.state.passwordValidation) {
      alert('the two passwords should match.');
      return;
    }

    this.props.userRegistration(this.state);
  }
  

  render() {
    return(
      <div className="register-page">
        <form onSubmit={(e) => {this.submitForm(); e.preventDefault();}}>
          <h1>Register</h1>
          <input type="text" placeholder="Email" value={this.state.email} onChange={this.saveEmail}/>
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.savePassword}/>
          <input type="password" placeholder="Same Password" value={this.state.passwordValidation} onChange={this.savePasswordValidation}/>
          <button type="submit">Create a user</button>
          <div className="custom-link"><Link to={'/login'}>are you sure you're not registered?</Link></div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.UserStatusReducer.userData,
});
const mapDispatchToProps = dispatch => () => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);
