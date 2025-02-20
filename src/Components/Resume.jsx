import React from "react";
import { Link } from "react-router-dom"

const Resume = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
            <h1>This is my current, and most up to date, resume</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ab quod odit expedita officiis amet facilis in totam, deleniti similique, numquam porro iste corrupti ex velit eius? Autem, dolore repellendus.</p>
        </div>
    );
};

export default Resume;