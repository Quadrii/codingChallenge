import React from "react";
import EditToggle from "./hooks/EditToggle";
import EditTodoForm from "./EditForm";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function TodoComp (props) {
	const [isEditing, toggleEdit] = EditToggle(false);
	return (

		<ListItem>
			{isEditing ? 
				(
					<EditTodoForm editTodo={props.editTodo} id={props.id} task={props.task} toggleEdit={toggleEdit} />
				) : (
				<>
					<Checkbox tabIndex={-1} checked={props.completed} onClick={()=>props.toggleTodo(props.id)}/>
					<ListItemText style={{textDecoration: props.completed ? "line-through" : "none"}}>
						{props.task}
					</ListItemText>
					<ListItemSecondaryAction>
						<IconButton arial-label="Delete" onClick={()=>props.removeTodo(props.id)}>
							<DeleteIcon/>
						</IconButton>
						<IconButton arial-label="Edit" onClick={toggleEdit}>
							<EditIcon/>
						</IconButton>
					</ListItemSecondaryAction>
				</>
			)}			
		</ListItem>
	)
}

export default TodoComp;