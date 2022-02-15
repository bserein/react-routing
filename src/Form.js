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
        {/* onChange is for everytime theres a change it creates an event and the target of that event is the input, which will set the name to whatever value you input */}
        <button type="submit">Submit</button>
        {/* this is like the onclick but for submit */}
      </form>

      <Link to="/">Home</Link>
    </>
  );
}

export default Form;
//you can use onBlur for validating emails