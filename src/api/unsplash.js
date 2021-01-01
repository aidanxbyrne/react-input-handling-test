import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { 
        Authorization: 'Client-ID V0B-o1I9YhpBtxMBTMbtwY7JHSyntkeWW25Ajo7to2Q' 
    }
});