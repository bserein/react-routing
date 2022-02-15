import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Product() {
    const params = useParams();
    // this is a hook, you can create your own custom hook if you want and you can use this hook to define your own hook
    return (
        <div>
        <h1>Product: {params.id}</h1>
            {/* //the name of the params is whatever you called it in the route */}
            <Link to="/">Home</Link>
            </div>
    )
}

export default Product;