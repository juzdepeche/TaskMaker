import React from 'react';
import { useAsync } from 'react-async';
import { GetTasks } from '../services/TaskService.js';
import Task from './Task.js';

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
