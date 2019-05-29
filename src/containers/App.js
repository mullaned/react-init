import React, {Component} from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'
import WithClass from '../hoc/WithClass'
import AuthContext from '../context/auth-context'


class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state= {
    persons: [
      {id: 1, name: 'David', age: 33},
      {id: 2, name: 'Anna', age: 22}
    ],
    showPersons: false,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangerHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return { 
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      }
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


  loginHandler = () => {
    this.setState({authenticated: true});
  };



  render(){
    console.log('[App.js] render');
    let persons = null;
    
    if (this.state.showPersons) {
      persons = 
        <Persons 
        persons = {this.state.persons}
        clicked = {this.deletePersonHandler}
        changed = {this.nameChangerHandler}
        isAuthenticated={this.state.authenticated}
        /> 
    }

    return (  
        <div className={classes.App}>
        <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler}}>
          <Cockpit 
              title= {this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
              
            />
            
          {persons} 
        </AuthContext.Provider>
                
      </div>
      
      
    );
  } 
}

export default App;
