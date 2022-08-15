import { useState } from "react";

export const useForm = ( initialForm = {} ) => {


    const [formState, setFormState] = useState( initialForm )

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value /* [name - unico en el form]: value - es el valor de el input seleccionado */
        })
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

  return {
    ...formState,/* Todos los campos del form */
    formState,
    onInputChange,
    onResetForm
  }
}