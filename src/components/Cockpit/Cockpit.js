import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const Cockpit = ( props ) => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    //Simulate Http request
    setTimeout(() => {
      // alert('Saved data to the cloud');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleaning work in useEffect')
    }
  }, [props.persons]);

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

export default Cockpit;