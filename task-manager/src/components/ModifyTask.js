import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
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
		<div style={{ width: '100%' }}>
			<Card style={{ width: '50%', margin: 'auto' }}>
				<h2>Modify Task</h2>
				<Form
					style={{
						margin: '12px',
						verticalAlign: 'center',
					}}
					onSubmit={onSubmit}
				>
					<Form.Group>
						<Form.Label>Title</Form.Label>
						<Form.Control
							placeholder="title"
							onChange={(e) => setTitle(e.target.value)}
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Description</Form.Label>
						<Form.Control
							placeholder="description"
							onChange={(e) => setDescription(e.target.value)}
						/>
					</Form.Group>
					<Button type="submit">Save</Button>
				</Form>
			</Card>
		</div>
	);
}
