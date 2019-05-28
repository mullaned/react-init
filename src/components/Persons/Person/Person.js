import React, {Component} from "react";
import classes from './Person.css';
import Aux from '../../../hoc/Auxilary';
import PropTypes from 'prop-types'

class Person extends Component{
  constructor(props) {
    super(props);
    this.inputElementRef =  React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <div className={classes.Person} >
        <p onClick={this.props.click}>I'm a person named {this.props.name}!! Who is {this.props.age}</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} ref={this.inputElementRef} />
      </div>
    );
  }
} 

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Person;
