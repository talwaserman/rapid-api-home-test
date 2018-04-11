require('./style.scss');
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actionCreators from './actions';

import ShowCard from '../ShowCard';

const Landing = props => (
  <div className="landing">
    <h1>Landing page</h1>
    <div>
      <input type="text" value={props.searchTerm} onChange={props.setSearchTerm}/>
    </div>
    <button type="button" onClick={props.clearSearchTerm}>clear search</button><br/>
    <button type="button" onClick={props.getAllMovies}>get all movies</button><br/>
    <Link to="/search">or Browse All</Link>
    {props.movies.map(movie => (<ShowCard key={movie.imdbID} {...movie}/>))}
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.SearchReducer.searchTerm,
  movies: state.SearchReducer.movies
});
const mapDispatchToProps = dispatch => () => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
