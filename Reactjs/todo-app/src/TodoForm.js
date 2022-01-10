import React, {useContext} from "react"
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import TodoFormHook from './hooks/TodoFormHook';
import {TodosContext} from "./context/todo.context";

function TodoForm () {
	const [value, handleChange, reset] = TodoFormHook(""); 
	const {dispatch} = useContext(TodosContext);
	return (
		<Paper>
			<form onSubmit={e => {
				e.preventDefault();
				dispatch({type: "ADD", task: value})
				reset();
				}
			}>
				<TextField value={value} onChange={handleChange} label="Add New Todo" fullWidth />
			</form>
		</Paper>
	)
}

export default TodoForm;