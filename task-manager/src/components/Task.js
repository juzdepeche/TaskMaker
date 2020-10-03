import React from 'react';

export default function Task({ task }) {
	return (
		<div>
			{task.id}: {task.title} - {task.description}
		</div>
	);
}
