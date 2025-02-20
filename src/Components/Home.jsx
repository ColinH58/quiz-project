import React from "react";
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <Link to='/blog'>Blog</Link>
            <Link to='/resume'>Resume</Link>
            <h1>Welcome to my Home Page!</h1>
        </div>
    );
};

export default Home;