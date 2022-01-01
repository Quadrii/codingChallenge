import React, {useState} from "react"; 
import TodoList from "./TodoList";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

function Todo () {
	const initials = [
		{
			id: 1, task:"clean the room", completed: true

		},
		{
			id: 2, task:"cook", completed: false

		},
		{
			id: 3, task:"rest", completed: true

		},
		{
			id: 1, task:"code", completed: false

		}
	];
	const [todos, setTodos] = useState(initials);
	return (
		<Paper elevation={0} style={{padding:0, margin:0, height:"100vh", background:"#fff"}}>
			<AppBar position="static">
			  <Toolbar>
			    <Typography variant="h6" color="inherit">
			      TODO APP WITH HOOK
			    </Typography>
			  </Toolbar>
			</AppBar>
			<TodoList todos={todos}/>
		</Paper>
	)
}

export default Todo;