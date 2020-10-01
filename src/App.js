import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

//import your own API key in config.js file
import apikey from './config';
import {  BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

//import components
import Navigation from './components/Navigation';
import ImageContainer from './components/ImageContainer';
import SearchForm from './components/SearchForm';
import PageError from './components/PageError';


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      cats:[],
      dogs:[],
      birds:[],
      search:[],
      loading: true
    };
  } 
   
  // Mount components for the search function and the defaults
   componentDidMount() {
    this.performSearch();
    this.performSearch('cats');
    this.performSearch('dogs');
    this.performSearch('birds');
  }

 // Get data from API request when user try to search images
  performSearch = (query = 'cats') =>{
    try {
      this.setState({ loading: true })

      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
          if (query === 'cats') {
            this.setState({
              cats: response.data.photos.photo,
              loading: false
            });
            
          } else if(query === 'dogs') {
            this.setState({
              dogs: response.data.photos.photo,
              loading: false
            });
            
          } else if(query === 'birds') {
            this.setState({
              birds: response.data.photos.photo,
              loading: false
            });
  
          }else{
            this.setState({
              search: response.data.photos.photo,
              loading: false
            });
  
          }
          
        }) 
     //handle error
    } catch (error) { 
      console.log('Error fetching and parsing data', error);
    } 
  }


  render() {
    return (
      <BrowserRouter>
        <div className= "main-container" >
        {/* add search form */}
          <SearchForm onSearch={this.performSearch} />
          <Navigation />
           {/* set routes */}
            <Switch>
            <Route exact path="/" render = { () => <Redirect to='/cats'/> } />
            <Route path="/cats" render = { () => (this.state.loading) ? <p>Loading...</p> : <ImageContainer data = {this.state.cats}/>  }  />
            <Route path="/dogs" render = { () => (this.state.loading) ? <p>Loading...</p> : <ImageContainer data = {this.state.dogs}/>  }  />
            <Route path="/birds" render = { () => (this.state.loading) ? <p>Loading...</p> : <ImageContainer data = {this.state.birds}/> } /> 
            <Route path="/search/:query" render = {() => (this.state.loading) ? <p>Loading...</p> : <ImageContainer data = {this.state.search}/> } />
            {/* Set error page when routes not exists */}
            <Route component={ PageError } />
          </Switch>
          
        </div>
      </BrowserRouter>
    );
  }
}
  
export default App;
