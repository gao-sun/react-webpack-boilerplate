import axios from 'axios';
import UserAPI from './user-api';

export class APIService {
	constructor() {
		this.axiosInstance = axios.create({
			baseURL: 'https://reqres.in/api/',
			headers: {},
			params: {},
		});

		this.User = new UserAPI(this.axiosInstance);
	}
};

export default new APIService();
