import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID LDTuK3ygQDIj5eKdNsb9Nq1XZYM2cZYRx8zmYjOPVeE'
    }
});