import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'

const Cockpit = ( props ) => {

  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);
  

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    //Simulate Http request
    const timer = setTimeout(() => {
      // alert('Saved data to the cloud');
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleaning work in useEffect')
    }
  }, [props.persons]);

  let customClasses = ['red', 'bold'].join(' ');

  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;

  }
  
  let otherClasses = [];
  if (props.personsLength <= 2){
    otherClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    otherClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1 className={customClasses}>{props.title}</h1>
      <p className={otherClasses.join(' ')}>React App</p>
      <button 
        className={btnClass}
        onClick={props.clicked}
        ref={toggleBtnRef}>Toggle
      </button>
      
        <button onClick={authContext.login}>Log In</button>
      
    </div>
    
  );
};

export default React.memo(Cockpit);