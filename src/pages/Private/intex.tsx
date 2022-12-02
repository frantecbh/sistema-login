import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';

// import { Container } from './styles';

export const Private = () => {

  const auth = useContext(AuthContext)

  return (  
    <div>
      <h1>Página Private</h1>
      <p>Olá<span> {auth.user?.name}</span></p>
    </div>
  );
}