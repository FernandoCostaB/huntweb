import axios from 'axios';

const api = axios.create({baseURL:'http://rockeseat-node.herokuapp.com/api'});

export default api;
