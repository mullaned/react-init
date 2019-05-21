import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state= {
    persons: [
      {name: 'David', age: 33},
      {name: 'Anna', age: 22}
    ]
  }

  switchNameHandler = () => {
    console.log('was clicked');
  }
  render(){
    return (
      <div className="App">
        <h1>Hi, I'm the first app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>
    );
  } 
}

export default App;
