import React,{ useState } from 'react';
import PropTypes from 'prop-types';

//componente funcional

const Greetinf = (props) => {

    // const [variable, metodo para actualizarla] = useState (valor inicial)
    const [age, setState] = useState(29)

    const birthday = () =>{
        //actualizamos el state
        setState(age + 1);
    }

    return (
        <div>
            <h1>
                Hola {props.name} desde componente funcional
            </h1>
            <h2>
                Tu edad es de: { age }
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};


Greetinf.propTypes = {
    name: PropTypes.string
};


export default Greetinf;
