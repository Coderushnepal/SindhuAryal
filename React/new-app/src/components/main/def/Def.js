import React from 'react';
import { Link } from 'react-router-dom';

const Def = () => (
    <div>
        <h1>I'm from def.</h1>
        <p>
            <Link to='/'>Main</Link>
        </p> 
        <Link to='/abc'>abc</Link>
    </div>   
);

export default Def;