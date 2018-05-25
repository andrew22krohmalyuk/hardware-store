import axios from 'axios';

export const API_URL = 'http://localhost:3030/api';

export const createRegister = data => axios.post(`${API_URL}/user`, data);
