import { observable, computed, action, runInAction } from 'mobx';
import Store from 'foundations/store';

export default class UserStore extends Store {
	@observable username = 'Steve';

	@action.bound
	async updateUsername() {
		const res = await this.apiService.User.getUser(2);

		runInAction(() => {
			this.username = res.data.first_name;
		});
	}
};
