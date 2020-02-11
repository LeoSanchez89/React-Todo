import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";


const Todo = props => {
	return (
		<div
			onClick={() => {
				props.toggleItem(props.item.id);
			}}
			className={`item${props.item.completed ? " completed" : ""}`}
		>
			<ListGroup>
				<ListGroupItem color="warning">{props.item.task}</ListGroupItem>
			</ListGroup>
		</div>
	);
};

export default Todo;
