import { api } from '../core/api';
import { SERVER } from '../constants';

const fetchApi = api({ baseURL: SERVER.HOST });

export default fetchApi;
