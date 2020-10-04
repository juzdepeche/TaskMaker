import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { CreateTask as AddTask } from '../services/TaskService.js';

export default function CreateTask() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [taskCreated, setTaskCreated] = useState(false);

	const onSubmit = async (e) => {
		e.preventDefault();

		await AddTask(title, description);

		setTaskCreated(true);
	};

	if (taskCreated) return <Redirect to="/dashboard" />;
	return (
		<form onSubmit={onSubmit}>
			<h2>Create Task</h2>
			<input
				placeholder="title"
				onChange={(e) => setTitle(e.target.value)}
			></input>
			<input
				placeholder="description"
				onChange={(e) => setDescription(e.target.value)}
			></input>
			<button>Create</button>
		</form>
	);
}
