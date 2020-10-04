import React from 'react';
import Task from './Task.js';
import { GetTasks } from '../services/TaskService.js';
import { useAsync } from 'react-async';

export default function TaskList() {
	const { data: tasks, error, isLoading } = useAsync({ promiseFn: GetTasks });
	if (isLoading) return 'Loading...';
	if (error) return `Something went wrong: ${error}`;
	if (tasks) {
		return tasks.map((task) => {
			if (!task) return null;
			return <Task key={task.id} task={task} />;
		});
	}
}
