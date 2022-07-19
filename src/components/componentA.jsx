import React from 'react';
import { Component } from 'react';
import ComponentB from './componentB';


class ComponentA extends Component {

    constructor(props){
        super(props);
        this.state = {
            nombre : "David",
            apellido : "Cedeño",
            email : "elcrackdavidcedeno.com",
            conectado : true
        }
    }

    render() {
        return (
            <div>
                <ComponentB contacto={this.state}/>
            </div>
        );
    }
};

export default ComponentA;