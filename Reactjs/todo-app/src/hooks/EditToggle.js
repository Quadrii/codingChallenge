import React, {useState} from "react";

function EditToggle (initialValue = false) {
	const [showEdit, setShowEdit] = useState(initialValue);

	const toggleState = () => {
		setShowEdit(!showEdit);
	}
	return [showEdit, toggleState];
}

export default EditToggle;