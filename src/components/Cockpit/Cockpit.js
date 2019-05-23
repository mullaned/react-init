import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
  let customClasses = ['red', 'bold'].join(' ');

  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;

  }
  
  let otherClasses = [];
  if (props.persons.length <= 2){
    otherClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    otherClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1 className={customClasses}>{props.title}</h1>
      <p className={otherClasses.join(' ')}>React App</p>
      <button 
        className={btnClass}
        onClick={props.clicked}>Toggle
      </button>
    </div>
    
  );
};

export default cockpit;