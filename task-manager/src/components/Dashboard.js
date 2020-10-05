import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import TaskList from './TaskList.js';

export default function Dashboard() {
	const [goToCreateTask, setGoToCreateTask] = useState(false);

	const createTask = () => {
		setGoToCreateTask(true);
	};

	if (goToCreateTask) return <Redirect to="/createtask" />;
	return (
		<Card style={{ width: '90%', margin: 'auto' }}>
			<h2>Dashboard</h2>
			<TaskList />
			<Button
				style={{ margin: 'auto', width: '30%', marginBottom: '12px' }}
				onClick={createTask}
			>
				Add
			</Button>
		</Card>
	);
}
