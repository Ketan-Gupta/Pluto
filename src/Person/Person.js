// This person component is used to render information about Person.
import React, { useState } from "react";
import Radium from 'radium';
import "./Person.css";

/*
class Person extends Component
{
  getAge = () => {
    return Math.floor(Math.random() * 45);
  }
    render()
    {
      return (
        <div>
          <p>Sergeant at Arms</p>
          <p>Name : {this.props.name}</p>
          <p> Age : {this.getAge()}</p>
          <p>{this.props.children}</p>
        </div>
      )
    }
  }

*/

const person = (props) => {

  /*
  const style = {
    '@media(minWidth : 500px)': {
      width: '450px'
    }
  }
  */

  return (
    <div className="Person">
      <p onClick={props.click}>Name : {props.name}, Age: {props.age}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} defaultValue={props.name} />
    </div>
  )
};

export default person;


// Remember that the jsx sytax is tranformed to React create equivalents, hence react library needs to imported mandatorily.
// When using class based components, the props are accessed using this.<variable_name>
// App element is rendered in place of root element.


// Content can not only be passed with props, but 
// structured html content can also be passed along by using enclosing
// it inside the custom component and using it with props.children 
