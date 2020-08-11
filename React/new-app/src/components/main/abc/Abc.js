import React from 'react';
import { Link } from 'react-router-dom';

const Abc = () => (
    <div>
        <h1>I'm from abc.</h1>
        <p>
            <Link to='/'>Main</Link>
        </p> 
        <Link to='/def'>def</Link>
    </div>   
);

export default Abc;