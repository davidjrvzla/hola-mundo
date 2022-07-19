import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

class ComponentB extends Component {

    constructor(props){
        super(props);
        this.state = {
            conectado : true
        }
    }

    cambiarEstado = () => {
        this.setState((prevState) => (
                {
                    conectado: prevState.conectado !== true
                }
        ))
    }
    
    render() {
        return (
            <div>
                <p>Nombre: {this.props.contacto.nombre}</p>
                <p>Apellido: {this.props.contacto.apellido}</p>
                <p>Email: {this.props.contacto.email}</p>
                {this.state.conectado 
                ? <p>Contacto En Linea</p> 
                : <p>Contacto No Disponible</p>
                }
                {this.state.conectado 
                ? <button onClick={this.cambiarEstado}>Desconectar</button> 
                : <button onClick={this.cambiarEstado}>Conectar</button>
                }
            </div>
        );
    };
};

ComponentB.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool,
};

export default ComponentB;