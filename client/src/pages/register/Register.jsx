import "./register.scss"
import React, { useState } from 'react';
import axios from 'axios';

export default class PersonAdd extends React.Component {
	state = {
		firstname: '',
		secondname: '',
		lastname: '',
		password: ''
	}

	handleChange_firstname = event => {
		this.setState({ firstname: event.target.value });
	}
	handleChange_secondname = event => {
		this.setState({ secondname: event.target.value });
	}
	handleChange_lastname = event => {
		this.setState({ lastname: event.target.value });
	}
	handleChange_password = event => {
		this.setState({ password: event.target.value });
	}

	handleSubmit = event => {
		event.preventDefault();
		const config = {
			"Accept": "application/json",
			"Content-Type": "application/x-www-form-urlencoded"
		}
		const user = {
			firstname: this.state.firstname,
			secondname: this.state.secondname,
			lastname: this.state.lastname,
			password: this.state.password,
		};
		let check = true;
		(Object.values(user)).forEach(element => {
			if (!element) check = false; 
		});
		if (check)
		axios.post(`http://127.0.0.1:5000/api/users`, { user })
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Имя:
						<input type="text" name="firstname" onChange={this.handleChange_firstname} />
					</label>
					<label>
						Фамилия:
						<input type="text" name="lastname" onChange={this.handleChange_secondname} />
					</label>
					<label>
						Отчество:
						<input type="text" name="secondname" onChange={this.handleChange_lastname} />
					</label>
					<label>
						Пароль:
						<input type="password" name="password" onChange={this.handleChange_password} />
					</label>
					<button type="submit">Add</button>
				</form>
			</div>
		)
	}
}
