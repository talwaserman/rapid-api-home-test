require('./style.scss');
import React, { Component } from 'react';

/**
* @augments {Component<{  shows:shape.isRequired>}
*/
class Search extends Component {
  state = {
    searchTerm: ''
  };

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        this is search page
      </div>
    );
  }
}

export default Search;
