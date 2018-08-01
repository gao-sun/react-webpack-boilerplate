import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styles from './style.scss';

@inject('User') @observer
export default class Home extends Component {
	async updateUsername() {
		this.props.User.updateUsername();
	}

	render() {
		const { username } = this.props.User;

		return (
			<div>
				<div className="logo"></div>
				<div className="title">Hello React!</div>
				<p>{ username }</p>
				<button onClick={ this.updateUsername.bind(this) }>Update via API</button>
			</div>
		);
	}
}
