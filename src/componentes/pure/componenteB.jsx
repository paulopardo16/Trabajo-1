import React, { Component } from 'react';



class ComponenteB extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
            status: false
        }
    }


    render() {
        return (
            <div>
                <h1>Status: {this.state.status ? 'Conect' : 'Disconect'}</h1>
                <button onClick={this.statusu}>Change</button>
            </div>
        );
    }
    statusu = () => {
        this.setState((prevState) => (
            {
                status: true
            }
        ))
    }

}

export default ComponenteB;
