import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state= {
    persons: [
      {name: 'David', age: 33},
      {name: 'Anna', age: 22}
    ],
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I'm the first app</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle
        </button>
        { this.state.showPersons ? 
          <div>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Davey')} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          changed={this.nameChangerHandler}
          />
        </div> : null
        }
        
      </div>
    );
  } 
}

export default App;
