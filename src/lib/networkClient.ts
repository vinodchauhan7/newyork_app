import axios from 'axios';

export const client = axios.create();

// client.interceptors.request.use((request) => {
//     request.headers.set('Cache-Control', 'no-cache');
//     request.headers.set('Pragma', 'no-cache');
//     request.headers.set('Expires', '0');
//     request.headers.set('mode', 'no cors');
//     return request;
//   });

client.defaults.timeout = 60000;