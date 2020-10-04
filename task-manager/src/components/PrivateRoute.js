import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IsLoggedIn } from '../services/AuthentificationService.js';
import { useAsync } from 'react-async';

export default function PrivateRoute({ component: Component, ...rest }) {
	const { data: isLoggedIn, error, isLoading } = useAsync({
		promiseFn: IsLoggedIn,
	});
	if (isLoading) return 'Loading...';
	return (
		<Route
			{...rest}
			render={(props) =>
				isLoggedIn ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	);
}
