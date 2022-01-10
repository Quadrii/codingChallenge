import React, {createContext, useReducer} from "react";
import TodoReducer from "../reducer/todo.reducer";
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
	const [todos, dispatch ] = useReducer(TodoReducer, defaultTodo);
	return (
		<TodosContext.Provider value={{todos, dispatch}}>
			{props.children}
		</TodosContext.Provider>
	)
}