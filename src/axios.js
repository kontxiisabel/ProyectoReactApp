import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myfirebase-24994.firebaseio.com'
});

export default instance;
