import React from 'react';
import PropTypes from 'prop-types';
import ComponenteB from './componenteB';


const ComponenteA = (props) => {
    return (
        <div>
            <h1>name: {props.name}</h1>
            <h1>lastname: {props.lname}</h1>
            <h1>email: {props.email}</h1>
            <ComponenteB></ComponenteB>
        </div>
    );
    
};


ComponenteA.propTypes = {
    name: PropTypes.string,
    lname: PropTypes.string,
    email: PropTypes.string,
    status: PropTypes.bool
};


export default ComponenteA;
