import React from "react";
import { Link } from "react-router-dom"

const Blog = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/resume'>Resume</Link>
            <h1>This would be where the blog section would live</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, in. Mollitia corporis amet quas laudantium cupiditate voluptates! Soluta similique nostrum commodi sint molestias, at aliquam, voluptatibus officiis dolorum illo recusandae.</p>
        </div>
    );
};

export default Blog;