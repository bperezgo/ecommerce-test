import { api } from '../../core/api';

const fetchApi = api({ baseURL: process.env.SERVER_HOST });

export default fetchApi;
