import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { CreateTask as AddTask } from '../services/TaskService.js';
import { Form, Button, Card } from 'react-bootstrap';

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
		<div style={{ width: '100%' }}>
			<Card style={{ width: '50%', margin: 'auto' }}>
				<h2>Create Task</h2>
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
					<Button type="submit">Create</Button>
				</Form>
			</Card>
		</div>
	);
}
