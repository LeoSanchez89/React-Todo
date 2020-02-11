import React from "react";
import { Input, Button, InputGroup } from "reactstrap";
import styled from "styled-components";

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			newItem: ""
		};
	}

	handleChanges = e => {
		this.setState({
			newItem: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addNewItem(this.state.newItem);
		this.setState({ newItem: "" });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<StyledGroup>
					<Input
						type="text" name="newItem" placeholder="Enter Task" value=
						{this.state.newItem}
						onChange={this.handleChanges}
						required
					/>

					<Button color="success" type="submit">
						Add
					</Button>
				</StyledGroup>
			</form>
		);
	}
}

export default TodoForm;

const StyledGroup = styled(InputGroup)`	
    margin-bottom: 15%;
   
`;



