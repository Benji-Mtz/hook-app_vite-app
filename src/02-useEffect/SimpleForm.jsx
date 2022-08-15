import React, { useState, useEffect } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Benji',
        email: 'benji@gmail.com'
    })

    const { username, email} = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value /* [name - unico en el form]: value - es el valor de el input seleccionado */
        })
    }

    useEffect(() => {
        // console.log("Dependencia [] me llamo cuando carga el componente solamente!");
    }, []);
    useEffect(() => {
      // console.log(" [formState] me llamo Siempre que cambien una campo del form");
    }, [ formState ]);
    useEffect(() => {
      // console.log("[email] me siempre que cambie el email");
    }, [ email ]);

  return (
    <>
        <h1>Simple Form</h1>   
        <hr />

        <input 
            type="text" 
            className='form-control'
            placeholder='Username'
            name='username'
            value={ username }
            onChange={onInputChange}
        />

        <input 
            type="email" 
            className='form-control mt-2'
            placeholder='correo@test.co'
            name='email'
            value={ email }
            onChange={onInputChange}
        />

        {
            username === 'Benji2' && <Message />
        }
    </>
  )
}
