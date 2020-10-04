import { webApiBaseUrl, test_jwt } from '../config/config.json';

const taskControllerRoute = '/task/';

// todo: catch http errors

export const GetTasks = () => {
	const requestOptions = {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
		},
	};

	return fetch(webApiBaseUrl + taskControllerRoute, requestOptions)
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

export const CreateTask = (title, description) => {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${test_jwt}`,
		},
		body: { title, description },
	};
	fetch(webApiBaseUrl + taskControllerRoute, requestOptions)
		.then((response) => response.json())
		.then((data) => console.log(data));
};

export const UpdateTask = (id, title, description) => {
	const requestOptions = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${test_jwt}`,
		},
		body: { title, description },
	};
	return fetch(
		webApiBaseUrl + taskControllerRoute + id,
		requestOptions
	).then((response) => response.json());
};
