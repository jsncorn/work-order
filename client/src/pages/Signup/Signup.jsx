import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {useMutation} from '@apollo/client';
import Auth from '../../utils/Auth';
import { ADD_EMPLOYEE } from '../../utils/mutations';
import './Signup.scss'

export default function Signup(props) {

  const [formState, setFormState ] = useState({email: '', password: ''});
  const [addEmployee] = useMutation(ADD_EMPLOYEE);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const mutationResponse = await addEmployee({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      }
    });
    const token = mutationResponse.data.addEmployee.token;
    Auth.login(token);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormState({
      ...formState,
      [name]: value,

    });
  }

  return (
    <div>
    <h2>Employee Sign Up</h2>
    <form onSubmit={handleFormSubmit}>
    <div className="formElement">
          <label htmlFor="firstName">First Name:</label>
          <input
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="formElement">
          <label htmlFor="lastName">Last Name:</label>
          <input
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="formElement">
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="formElement">
          <label htmlFor="pwd">Password:</label>
          <input
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="formButton">
          <button type="submit">Submit</button>
        </div>
      </form>


    </div>
  )
}
