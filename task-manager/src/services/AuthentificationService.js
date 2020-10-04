import { webApiBaseUrl } from '../config/config.json';

const authentificationControllerRoute = '/user/';

export const Authenticate = (credentials) => {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: credentials,
	};

	return fetch(
		webApiBaseUrl + authentificationControllerRoute + 'authenticate',
		requestOptions
	)
		.then((response) => {
			if (response.ok) {
				return response.text();
			} else {
				throw response;
			}
		})
		.catch((error) => {
			throw error.statusText;
		});
};

export const IsLoggedIn = () => {
	const requestOptions = {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
		},
	};

	return fetch(
		webApiBaseUrl + authentificationControllerRoute + 'isLoggedIn',
		requestOptions
	)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw response;
			}
		})
		.catch((error) => {
			throw error.statusText;
		});
};
