import React, { useState } from 'react';
import { Authenticate } from '../services/AuthentificationService.js';
import { Redirect } from 'react-router-dom';

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const onSubmit = async (e) => {
		e.preventDefault();

		const credentials = {
			username,
			password,
		};

		const token = await Authenticate(JSON.stringify(credentials));
		//todo check if error
		localStorage.setItem('jwt_token', token);
		setIsLoggedIn(true);
	};

	if (isLoggedIn) return <Redirect to="/tasklist" />;
	return (
		<form onSubmit={onSubmit}>
			<h1>Login</h1>
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
