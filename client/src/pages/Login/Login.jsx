import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/Auth';
import { LOGIN } from '../../utils/mutations';
import './Login.scss'

export default function Signup(props) {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, {error}] = useMutation(LOGIN);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,

    });
  }

  return (
    <div className='acctWrap'>
      <div className='loginWrapper'>
        <h2>Employee Log in</h2>
        <form onSubmit={ handleFormSubmit }>
          <div className="formElement">
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="email"
              id="email"
              onChange={ handleChange }
            />
          </div>
          <div className="formElement">
            <label htmlFor="pwd">Password:</label>
            <input
              name="password"
              type="password"
              id="pwd"
              onChange={ handleChange }
            />
          </div>
          <div className="formButton">
            <Link className='link' to="/signup">← Go to Signup</Link>
            <button type="submit">Login</button>
          </div>
          {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
        </form>
      </div>
    </div>
  )
}
