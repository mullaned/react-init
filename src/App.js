import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'David', age: 33},
      {name: 'Anna', age: 22}
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  const switchNameHandler = () => {
    console.log('was clicked');
  
    setPersonsState({
      persons: [
        {name: 'Dave', age: 33},
        {name: 'Ann', age: 22}
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm the first app</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
    </div>
  );
} 


export default App;



