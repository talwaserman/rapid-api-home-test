require('./style.scss');
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../AppWrapper/actions';

const Header = props => (
  <div className="header">
   <img 
      src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/reuntzuy6gy8ssnbktye" 
      alt="logo"
      width="50px"
    />
    {!!props.userData && <button type="button" onClick={props.userLogout}>Logout</button>}
  </div>
);

const mapStateToProps = state => ({
  userData: state.UserStatusReducer.userData,
});

const mapDispatchToProps = dispatch => () => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
