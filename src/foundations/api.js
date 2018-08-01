export default class API {
	constructor(axiosInstance) {
		this.axios = axiosInstance;
	}

	wrap(res) {
		if(res.status >= 400) {
			throw new Error(res);
		}

		return res.data;
	}
};
