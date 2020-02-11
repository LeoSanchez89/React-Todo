import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";
import styled from "styled-components";

const toDo = [
	{
		task: "Complete Assignment",
		id: 1,
		completed: false
	},
	{
		task: "Wash Dishes",
		id: 2,
		completed: false
	},
	{
		task: "Take Out Garbage",
		id: 3,
		completed: false
	}
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			todoList: toDo
		};
	}

	toggleItem = clickedId => {
		const newTodo = this.state.todoList.map(item => {
			if (item.id === clickedId) {
				return {
					...item,
					completed: !item.completed
				};
			} else {
				return item;
			}
		});

		this.setState({
			todoList: newTodo
		});
	};

	addNewItem = itemText => {
		const newItem = {
			task: itemText,
			id: Date.now(),
			completed: false
		};
		this.setState({
			todoList: [...this.state.todoList, newItem]
		});
	};

	clearCompleted = () => {
		this.setState({
			todoList: this.state.todoList.filter(task => !task.completed)
		});
	};

	render() {
		return (
			<MainContainer>
				<StyledDiv>
					<StyledH1>To-Do List</StyledH1>
					<TodoForm addNewItem={this.addNewItem} />

					<TodoList
						toDo={this.state.todoList}
						toggleItem={this.toggleItem}
						clearCompleted={this.clearCompleted}
					/>
				</StyledDiv>
			</MainContainer>
		);
	}
}

export default App;

const MainContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
  align-items: center;
  text-align:center;
  margin-bottom:3%;
`;

const StyledH1 = styled.h1`
	font-size: 3.5rem;
	margin-top: 5%;
	margin-bottom: 25%;
`;

const StyledDiv = styled.div`
	width: 30%;
`;
