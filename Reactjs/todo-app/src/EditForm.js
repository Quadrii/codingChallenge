import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import TodoFormHook from './hooks/TodoFormHook';

function EditTodoForm (props) {
	const [value, handleChange, reset] = TodoFormHook(props.task);
	return (
		<Paper>
			<form onSubmit={e => {
				e.preventDefault();
				props.editTodo(props.id, value);
				reset();
				props.toggleEdit()
			}
			}>
				<TextField value={value} onChange={handleChange} label="Add New Todo" fullWidth />
			</form>
		</Paper>
	)
}

export default EditTodoForm;