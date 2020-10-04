import React, { useState } from 'react';
import { Authenticate } from '../services/AuthentificationService.js';
import { Redirect } from 'react-router-dom';

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const onSubmit = async (e) => {
		e.preventDefault();

		const token = await Authenticate(username, password);
		//todo check if error
		localStorage.setItem('jwt_token', token);
		setIsLoggedIn(true);
	};

	if (isLoggedIn) return <Redirect to="/dashboard" />;
	return (
		<form onSubmit={onSubmit}>
			<h2>Login</h2>
			<input
				placeholder="username"
				onChange={(e) => setUsername(e.target.value)}
			></input>
			<input
				type="password"
				onChange={(e) => setPassword(e.target.value)}
			></input>
			<button>Login</button>
		</form>
	);
}
