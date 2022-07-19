import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class'
import { useState } from 'react';

const ContactoComponent = ({ contacto }) => {

    const [conectado, setConectado] = useState(true);

    const changeState = () => {
        setConectado(conectado !==true)
    }
    console.log(contacto.conectado)
    return (
        <div>
            <p>Nombre: { contacto.nombre }</p>
            <p>Apellido: { contacto.apellido }</p>
            <p>Email: { contacto.email }</p>
            {/*<p>{contacto.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</p>*/}
            <p>{conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</p>
            {conectado 
                ? <button onClick={changeState}>Desconectar</button> 
                : <button onClick={changeState}>Conectar</button>
                }
        </div>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
