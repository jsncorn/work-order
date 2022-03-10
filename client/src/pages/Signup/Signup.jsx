import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {useMutation} from '@apollo/client';
import Auth from '../../utils/Auth';
import { ADD_EMPLOYEE } from '../../utils/mutations';


export default function Signup(props) {

  const [formState, setFormState ] = useState({email: '', password: ''});
  const [addEmployee] = useMutation(ADD_EMPLOYEE);


  return (
    <div>Signup</div>
  )
}
