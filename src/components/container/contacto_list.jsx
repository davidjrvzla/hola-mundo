import React from 'react';
import { Contacto } from '../../models/contacto.class'
import ContactoComponent from '../pure/contacto';

const ContactoListComponent = () => {

    const defaultContacto = new Contacto('David', 'Cedeño', 'elcrackdavidcedeno@gmail.com', true);
    
    /*const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }*/

    return (
        <div>
            <div><h3>Contacto:</h3></div>
            <ContactoComponent contacto={defaultContacto}/>
        </div>
    );
};

export default ContactoListComponent;