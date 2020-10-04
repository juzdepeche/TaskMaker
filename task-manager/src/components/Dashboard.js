import React, { useState } from 'react';
import TaskList from './TaskList.js';
import { Redirect } from 'react-router-dom';

export default function Dashboard() {
	const [goToCreateTask, setGoToCreateTask] = useState(false);

	const createTask = () => {
		setGoToCreateTask(true);
	};

	if (goToCreateTask) return <Redirect to="/createtask" />;
	return (
		<>
			<h2>Dashboard</h2>
			<TaskList />
			<button onClick={createTask}>Create Task</button>
		</>
	);
}
