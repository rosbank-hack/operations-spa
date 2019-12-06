import axios from 'axios';
import backendUrl from '../config';

export const getPage = () => axios.get(`${backendUrl}`).then(x => x.data);
