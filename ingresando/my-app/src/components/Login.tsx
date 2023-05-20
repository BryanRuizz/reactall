import React, { useState } from 'react';
import { login } from '../api/base.api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const result = await login(username, password);
      console.log('Ingreso exitoso:', result); // Aquí puedes manejar la respuesta de la API según tus necesidades
    } catch (error: any) {
      console.error('Error en el ingreso:', error.message); // Manejo de error en caso de fallo en la solicitud
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuario" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
      <button type="submit">Ingresar</button>
    </form>
  );
};

export default Login;