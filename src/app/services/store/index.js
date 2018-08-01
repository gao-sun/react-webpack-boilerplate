import UserStore from './user/user-store';

export class StoreService {
	constructor() {
		this.User = new UserStore();
	}

	setServices({ apiService }) {
		Object.keys(this).forEach(key => {
			if(key != 'setServices') {
				this[key].setServices({ apiService });
			}
		});
	}
};

export default new StoreService();
