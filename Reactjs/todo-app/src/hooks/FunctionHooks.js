import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';


export default initialTodo => {
	const [todos, setTodos] = useState(initialTodo);
	
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

	return {
		todos,
		addTodo:addTodo,
		editTodo:editTodo,
		removeTodo:removeTodo,
		toggleTodo:toggleTodo
	}
}