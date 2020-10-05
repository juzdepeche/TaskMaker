import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Task({ task }) {
	const [goToModifyTask, setGoToModifyTask] = useState(false);

	const update = () => {
		setGoToModifyTask(true);
	};

	if (goToModifyTask)
		return <Redirect to={{ pathname: '/modifytask', state: { task } }} />;
	return (
		<tr>
			<td>{task.id}</td>
			<td>
				<Button onClick={update}>Update</Button>
			</td>
			<td>{task.title}</td>
			<td>{task.description}</td>
		</tr>
	);
}
