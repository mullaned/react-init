import React, {Component} from 'react';
import classes from './App.css';
import Person from './Person/Person'


class App extends Component {
  state= {
    persons: [
      {id: 1, name: 'David', age: 33},
      {id: 2, name: 'Anna', age: 22}
    ],
    showPersons: false
  }

  

  nameChangerHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons})
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      
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
              key={person.id}
              changed={(event) => this.nameChangerHandler(event, person.id)}
            />
          })}
          
        </div>
      );

      style.backgroundColor = 'red';
      
    }

    let customClasses = ['red', 'bold'].join(' ');

    let otherClasses = [];
    if (this.state.persons.length <= 2){
      otherClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      otherClasses.push(classes.bold);
    }

    return (
      
        <div className={classes.App}>
          <h1 className={customClasses}>Hi, I'm the first app</h1>
          <p className={otherClasses.join(' ')}>React App</p>
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
