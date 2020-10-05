import React from 'react';
import { useAsync } from 'react-async';
import { Table } from 'react-bootstrap';
import { GetTasks } from '../services/TaskService.js';
import Task from './Task.js';

export default function TaskList() {
	const { data: tasks, error, isLoading } = useAsync({ promiseFn: GetTasks });
	if (isLoading) return 'Loading...';
	if (error) return `Something went wrong: ${error}`;
	if (tasks) {
		return (
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>id</th>
						<th>Update</th>
						<th>Title</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{tasks.map((task) => {
						if (!task) return null;
						return <Task key={task.id} task={task} />;
					})}
				</tbody>
			</Table>
		);
		// return tasks.map((task) => {
		// 	if (!task) return null;
		// 	return <Task key={task.id} task={task} />;
		// });
	}
}
