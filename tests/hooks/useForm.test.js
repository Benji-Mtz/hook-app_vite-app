import { act, renderHook } from '@testing-library/react';
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en el useForm()', () => { 

    const initialForm = {
        name: 'Test',
        email: 'test@jest.js'
    }

    test("debe retornar los valores por default", () => {
        const { result } = renderHook( () => useForm(initialForm) );
        
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        })
    });

    test("debe cambiar el nombre del formulario", () => {

        const { result } = renderHook( () => useForm(initialForm) );

        const { formState, onInputChange, onResetForm } = result.current;
        act( () => {
            onInputChange({target: {name: 'name', value: 'Benji Mtz' }})
        })

        expect(result.current.name).toBe('Benji Mtz')
        expect(result.current.formState.name).toBe('Benji Mtz')

    });

    test("debe cambiar de realizar el reset del formulario", () => {

        const { result } = renderHook( () => useForm(initialForm) );

        const { formState, onInputChange, onResetForm } = result.current;
        act( () => {
            onInputChange({target: {name: 'name', value: 'Benji Mtz' }})
            onResetForm();
        })

        expect(result.current.name).toBe(initialForm.name)
        expect(result.current.formState.name).toBe(initialForm.name)

    });

 })