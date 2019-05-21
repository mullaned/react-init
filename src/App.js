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

  

  nameChangerHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Davee', age: 33},
        {name: event.target.value, age: 22}
      ]
     })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
            />
          })}
          
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm the first app</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle
        </button>
        
        {persons} 
        
      </div>
    );
  } 
}

export default App;
