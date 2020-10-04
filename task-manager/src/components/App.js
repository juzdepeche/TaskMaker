import React from 'react';
import TaskList from './TaskList.js';
import Login from './Login.js';
import {
	Switch,
	Route,
	BrowserRouter as Router,
	Redirect,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute.js';
import { IsLoggedIn } from '../services/AuthentificationService.js';
import { useAsync } from 'react-async';

function App() {
	const { data: isLoggedIn, error, isLoading } = useAsync({
		promiseFn: IsLoggedIn,
	});
	if (isLoading) return 'Loading...';
	return (
		<>
			<div>
				<b>Task Maker</b>
			</div>
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					<PrivateRoute path="/tasklist" component={TaskList} />
					<Route
						path="/"
						render={(props) =>
							!error && isLoggedIn ? (
								<Redirect to="/tasklist" />
							) : (
								<Redirect to="/login" />
							)
						}
					/>
				</Switch>
			</Router>
		</>
	);
}

export default App;
