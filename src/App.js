import React, { Component } from 'react';
import PersonList from './components/PersonList';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [{ firstName: 'Tony', lastName: 'Stark' }]
    }
  }
  render() {
    return (
      <div className="App" >
        <PersonList people={this.state.people} />
      </div>
    );
  }
}

export default App;
