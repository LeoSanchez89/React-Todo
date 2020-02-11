import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import styled from "styled-components";


const Todo = props => {
	return (
		<div
			onClick={() => {
				props.toggleItem(props.item.id);
			}}
			className={`item${props.item.completed ? " completed" : ""}`}
		>
			<ListGroup>
				<StyledItem color="warning">{props.item.task}</StyledItem>
			</ListGroup>
		</div>
	);
};

export default Todo;

const StyledItem = styled(ListGroupItem)`
    margin-bottom:1%;
`; 
