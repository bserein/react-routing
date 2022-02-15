import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Form() {
  const [name, setName] = useState('');
  //this sets the initial value to nothing
  //this is called a touple an array with two values

  const onSubmit = (e) => {
    e.preventDefault();
  };
  //this will prevent the page from reloading
  //e is the event
  //to prevent the default action from happening
  return (
    <>
      <h1>Fill out your info or else</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        {/* you can also just put onSubmit */}
        <input
          type="text"
          placeholder="Type your name here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* setName is a function that sets the value you put in, onchange means everytime this changes sets the name to the new value you inputed */}
        <button type="submit">Submit</button>
        {/* this is like the onclick but for submit */}
      </form>

      <Link to="/">Home</Link>
    </>
  );
}

export default Form;
