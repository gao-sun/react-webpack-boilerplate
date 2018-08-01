import API from 'foundations/api';

export default class UserAPI extends API {
	async getUser(id) {
		return this.wrap(await this.axios.get(`/users/${ id }`));
	}
};
