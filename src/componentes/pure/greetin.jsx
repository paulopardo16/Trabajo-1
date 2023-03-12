import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Componente tipo clase

class Greetin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: 29
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Hola {this.props.name}
                </h1>
                <h2>
                    Tu edad es de: {this.state.age}
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }
    //Generando un cambio a un estado de un valor
    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
        ))
    }
    //---Fin
}

Greetin.propTypes = {
    name: PropTypes.string,
};


export default Greetin;
