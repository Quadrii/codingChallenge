import React, {createContext} from "react";
import FunctionHooks from "../hooks/FunctionHooks";


const defaultTodo = [
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

export const TodosContext = createContext();

export function TodoProvider(props) {
	const {todos, addTodo, editTodo, removeTodo, toggleTodo} = FunctionHooks(defaultTodo);
	return (
		<TodosContext.Provider value={{todos, addTodo, editTodo, removeTodo, toggleTodo}}>
			{props.children}
		</TodosContext.Provider>
	)
}