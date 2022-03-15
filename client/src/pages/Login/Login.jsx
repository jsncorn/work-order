import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/Auth';
import { LOGIN } from '../../utils/mutations';
import './Login.scss'

function Login(props) {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(formState);
    setFormState({
      ...formState,
      [name]: value,

    });
  }

  return (
    <div className='acctWrap'>
      <div className='loginWrapper'>
        <h2>Employee Log in</h2>
        <form onSubmit={ handleFormSubmit } style={{width:"50%", margin:"auto"}}>
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
            <button type="submit">Login</button>
          </div>
          { error ? (
            <div>
              <p className="error-text">The provided credentials are incorrect</p>
            </div>
          ) : null }
        </form>

      </div>
    </div>
  )
}

export default Login;