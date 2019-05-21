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

  switchNameHandler = (newName) => {
   this.setState({
    persons: [
      {name: newName, age: 33},
      {name: 'Ann', age: 22}
    ]
   })
  }

  nameChangerHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Davee', age: 33},
        {name: event.target.value, age: 22}
      ]
     })
  }
  render(){
    return (
      <div className="App">
        <h1>Hi, I'm the first app</h1>
        <button onClick={()=> this.switchNameHandler('Dave')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Davey')} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          changed={this.nameChangerHandler}
          />
      </div>
    );
  } 
}

export default App;
