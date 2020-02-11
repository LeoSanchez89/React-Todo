import React from "react";
import Todo from "./Todo";
import { Button } from "reactstrap";
import styled from "styled-components";

const TodoList = props => {
	return (
		<div>
            {props.toDo.map(item => {
                return (
                    <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
                )
            })}
			<StyledButton block color="danger" size="lg" onClick={props.clearCompleted}>Clear Completed</StyledButton>
		</div>
	);
};

export default TodoList;

const StyledButton = styled(Button)`
    margin-top: 2%;
`;