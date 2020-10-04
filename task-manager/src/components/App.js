import React from 'react';
import Dashboard from './Dashboard.js';
import Login from './Login.js';
import CreateTask from './CreateTask.js';
import {
	Switch,
	Route,
	BrowserRouter as Router,
	Redirect,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute.js';
import ModifyTask from './ModifyTask.js';
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
				<h1>Task Maker</h1>
			</div>
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					<PrivateRoute path="/dashboard" component={Dashboard} />
					<PrivateRoute path="/createtask" component={CreateTask} />
					<PrivateRoute path="/modifytask" component={ModifyTask} />
					<Route
						path="/"
						render={(props) =>
							!error && isLoggedIn ? (
								<Redirect to="/dashboard" />
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
