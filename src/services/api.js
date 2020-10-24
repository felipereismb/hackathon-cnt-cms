import axios from 'axios';

const api = axios.create({
  baseURL: 'https://app.folhacerta.com/App/',
});

export { api };
