import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
              <h1>Search App</h1>
              <p>This is a simple search app</p>
          </Container>
        </Jumbotron> 
      </div>
    );
  }
  }
  

export default App;
