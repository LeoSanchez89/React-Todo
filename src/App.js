import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const toDo = [
	{
		task: "Complete Assignment",
		id: Date.now(),
		completed: false
	},
	{
		task: "Buy Groceries",
		id: Date.now(),
		completed: false
	},
	{
		task: "Take Out Garbage",
		id: Date.now(),
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
      }
      else {
        return item;
      }
    });

    this.setState({
			todoList: newTodo
		});
  }

  addNewItem = itemText => {
    const newItem = {
      task: itemText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newItem]
    });
  }

  

	render() {
		return (
			<section>
				<h1>To Do List</h1>
        <TodoForm addNewItem={this.addNewItem}/>
        <TodoList toDo={this.state.todoList} toggleItem={this.toggleItem}/>
			</section>
		);
	}
}

export default App;
