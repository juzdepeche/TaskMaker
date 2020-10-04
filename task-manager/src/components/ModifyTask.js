import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UpdateTask } from '../services/TaskService.js';

export default function ModifyTask({ location }) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [taskUpdated, setTaskUpdated] = useState(false);

	const task = location.state.task;

	const onSubmit = async (e) => {
		e.preventDefault();

		await UpdateTask(task.id, title, description);

		setTaskUpdated(true);
	};

	if (taskUpdated) return <Redirect to="/dashboard" />;
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
			<button>Save</button>
		</form>
	);
}
