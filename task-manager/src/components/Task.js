import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function Task({ task }) {
	const [goToModifyTask, setGoToModifyTask] = useState(false);

	const update = () => {
		setGoToModifyTask(true);
	};

	if (goToModifyTask)
		return <Redirect to={{ pathname: '/modifytask', state: { task } }} />;
	return (
		<div>
			{task.id}:<button onClick={update}>Update</button>
			{task.title} - {task.description}
		</div>
	);
}
