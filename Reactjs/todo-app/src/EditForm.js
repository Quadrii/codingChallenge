import React, {useContext} from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import TodoFormHook from './hooks/TodoFormHook';
import {TodosContext} from "./context/todo.context";


function EditTodoForm (props) {
	const [value, handleChange, reset] = TodoFormHook(props.task);
	const {editTodo} = useContext(TodosContext);
	return (
		<Paper>
			<form onSubmit={e => {
				e.preventDefault();
				editTodo(props.id, value);
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