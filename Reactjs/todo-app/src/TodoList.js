import React from 'react';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import TodoComp from "./TodoComp";

function TodoList (props) {
	return (
		<Paper>
			{
				props.todos.map(todo => (
					<List>
						<TodoComp task={todo.task} completed={todo.completed} key={todo.id} editTodo={props.editTodo} removeTodo={props.removeTodo} id={todo.id} toggleTodo={props.toggleTodo}
						/>
						<Divider/>
					</List>
				))
			}
		</Paper>
	)
}

export default TodoList;