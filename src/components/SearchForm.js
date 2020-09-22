import React, { Component } from 'react';
import { withRouter } from "react-router";


class SearchForm extends Component {
  
  state = {
    searchText: ''
  }
  
  // Keep track of the value in the search bar
  onSearchChange = (e) => {
    this.setState({ searchText: e.target.value });
  }

  // Handle the requested search when the search button is clicked
  handleSubmit = (e) => {
    e.preventDefault();
    
    let searchQuery = this.query.value;
    let path = `/search/${searchQuery}`;
    this.props.history.push(path);
    
    this.props.onSearch(searchQuery);
    e.currentTarget.reset();
  }

  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
          <label className="is-hidden" htmlFor="search"></label>
          <input type="search" 
              onChange={this.onSearchChange}
              name="search" 
              ref={(input) => this.query = input}
              placeholder="Search..." />
          <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>
    );
  }
}
  
export default withRouter(SearchForm);