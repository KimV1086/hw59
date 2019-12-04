import React from 'react';
import './Joke.css'

const Joke = props => {
    return (
        <div className="joke">
            <p>{props.value}</p>
        </div>
    );
};

export default Joke;
