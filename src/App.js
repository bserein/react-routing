import './App.css';
import { Routes, Route, Link } from "react-router-dom";
// this is importing the library for what we need from the router
import Home from './Home';
import About from './About';
import Product from './Product';
import CatchAll from './CatchAll';
import Form from './Form';
//you import the files functions to the app so you can use it and look neat and organized here

function App() {
  return (
    <div className="App">
    <h1>Welcome to React Router!</h1>
    {/* if its outside of the route it wont change while the page changes */}
    <Link to='product/1'>Product 1</Link><br/>
    <Link to='product/2'>Product 2</Link><br/>
    <Link to='product/3'>Product 3</Link><br/>
    <Link to='form'>Form</Link>
    {/* its bad practice to use breaks its better to use CSS to fix this */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='product/:id' element={<Product />} />
        {/* you called it id and that is what it is called in the product.js */}
     
      <Route path='form' element={<Form />}/>
      {/* This has to be above the catch all, the catch all must remain on the bottom //this is the form route to create a form */}
      <Route path='*' element={<CatchAll />}/>
      {/* This is the page 404 error you would have if someone goes on the url and goes to a page that does not exist how z */}
    
    </Routes>
    {/* These are the switch statements leading to the path of the about page so we can display different pages */}
  </div>
  );
}

export default App;
