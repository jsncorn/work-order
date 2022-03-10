import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {useMutation} from '@apollo/client';
import Auth from '../../utils/Auth';

export default function Signup(props) {

  const [formState, setFormState ] = useState({email: '', password: ''});
  const [addEmployee] = useMutation();


  return (
    <div>Signup</div>
  )
}
