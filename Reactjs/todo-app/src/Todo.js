import React, {useState} from "react"; 
import TodoList from "./TodoList";
import Paper from "@material-ui/core/Paper";
import { v4 as uuidv4 } from 'uuid';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TodoForm from "./TodoForm";

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
			id: 4, task:"code", completed: false

		}
	];

	const [todos, setTodos] = useState(initials);
	const addTodo = newTodo => {
		setTodos([...todos, {id:uuidv4(), task: newTodo, completed: false}])
	}

	const editTodo = (todoId, newTask) => {
		const updatedTodo = todos.map(todo =>
			todo.id === todoId ? {...todo, task: newTask} : todo
		)
		setTodos(updatedTodo);
	}

	const removeTodo = todoId => {
		const updatedTodo = todos.filter(todo => todo.id != todoId)
		setTodos(updatedTodo);
	}

	const toggleTodo = todoId => {
		const updatedTodo = todos.map(todo =>
			todo.id === todoId ? {...todo, completed: !todo.completed} : todo
		)
		setTodos(updatedTodo);
	}

	return (
		<Paper elevation={0} style={{padding:0, margin:0, height:"100vh", background:"#fff"}}>
			<AppBar position="static">
			  <Toolbar>
			    <Typography variant="h6" color="inherit">
			      TODO APP WITH HOOK
			    </Typography>
			  </Toolbar>
			</AppBar>
			<Grid container justify="center" style={{marginTop:"10px"}}>
				<Grid item xs={11} md={8} lg={4}>
					<TodoForm addTodo={addTodo} style={{paddingBottom:"10px"}}/>
					<TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo } editTodo={editTodo}/>
				</Grid>
			</Grid>
		</Paper>
	)
}

export default Todo;