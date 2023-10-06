import axios from 'axios';

export default axios.create({
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
  timeout: 10000,
});
