import { useState } from 'react'

const fieldTypeValidation = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido'
  },
  number: {
    regex: /^\d+$/,
    message: 'Informe apenas números'
  }
}

const useForm = (type) => {
  const[value, setValue] = useState('');
  const[error, setError] = useState(null);

  const validate = (value) => {
    if (type === false) return true;
    if (value?.length === 0) {
      setError('Preencha um valor.');
      return false;
    }

    if (fieldTypeValidation[type] && !fieldTypeValidation[type].regex.test(value)) {
      setError(fieldTypeValidation[type].message);
      return false;
    }

    setError(null);
    return true;
  }
  
  const onChange = ({ target }) => {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,    
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  }
}

export default useForm
