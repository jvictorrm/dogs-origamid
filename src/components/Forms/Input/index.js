import React from 'react'
import { Container } from './styles';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} value={value} onChange={onChange} onBlur={onBlur}/>
      {error && <p>{error}</p>}
    </Container>
  )
}

export default Input
