import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Authenticate } from '../services/AuthentificationService.js';
import { Form, Button, Card } from 'react-bootstrap';

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
		<div style={{ width: '100%' }}>
			<Card style={{ width: '50%', margin: 'auto' }}>
				<Form
					style={{
						margin: '12px',
						verticalAlign: 'center',
					}}
					onSubmit={onSubmit}
				>
					<Form.Group>
						<Form.Label>Username</Form.Label>
						<Form.Control
							placeholder="username"
							onChange={(e) => setUsername(e.target.value)}
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>
					<Button type="submit">Login</Button>
				</Form>
			</Card>
		</div>
	);
}
