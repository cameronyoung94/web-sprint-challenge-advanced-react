// write your custom hook here to control your checkout form
import { useLocalStorage } from "./localStorage";

export const useForm = (key, initialValues, callback) => {
    const [values, setValues] = useLocalStorage (key, initialValues)
    const handleChanges = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const clearForm = (e) => {
        e.preventDefault()
        setValues(initialValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        callback()
    }

    return [values, clearForm, handleSubmit, handleChanges]
}
