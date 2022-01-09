import React from "react";
import FunctionHooks from "./hooks/FunctionHooks"; 
import TodoList from "./TodoList";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TodoForm from "./TodoForm";
import {TodoProvider} from "./context/todo.context";

function Todo () {
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
					<TodoProvider>
						<TodoForm style={{paddingBottom:"10px"}}/>
						<TodoList />
					</TodoProvider>
				</Grid>
			</Grid>
		</Paper>
	)
}

export default Todo;