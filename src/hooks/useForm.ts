import { ChangeEvent, useState } from 'react'

interface IUpdateField {
    field: string
    value: string | boolean
}

export const useForm = <T extends Object>( initialState: T ) => {

    const [form, setForm] = useState(initialState);

    const reset = () => setForm( initialState )

    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, input?: HTMLInputElement) => {
        const { name, value, type } = target
        if (type === 'checkbox' && input) {
            setForm({
                ...form,
                [ name ]: input.checked
            })
        } else {
            setForm({
                ...form,
                [ name ]: value
            })
        }

    }

    // const updateProperty = (value: boolean) => setForm(state => ({ ...state, publish: value }))

    const updateField = ({ value, field }: IUpdateField) => {
        console.log(value);
        console.log(field);
        setForm({
            ...form,
            [ field ]: value
        })
    }

    return {
        form,
        reset,
        handleInputChange,
        updateField,
        ...form
    }

}