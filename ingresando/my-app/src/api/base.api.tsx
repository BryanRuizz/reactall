import axios from 'axios';

const BASE_URL = 'http://ws.aldafa.com.mx:8090/api/'; // Ruta base de la API

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    throw new Error('Error en la solicitud de ingreso');
  }
};