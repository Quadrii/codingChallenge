import React,  {useContext} from 'react';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import TodoComp from "./TodoComp";
import {TodosContext} from "./context/todo.context";


function TodoList () {
	const {todos} = useContext(TodosContext);
	return (
		<Paper>
			{
				todos.map(todo => (
					<List>
						<TodoComp task={todo.task} completed={todo.completed} key={todo.id} id={todo.id} 
						/>
						<Divider/>
					</List>
				))
			}
		</Paper>
	)
}

export default TodoList;