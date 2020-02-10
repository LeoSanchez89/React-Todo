import React from "react";

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
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewItem(this.state.newItem);
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="newItem"
                    value={this.state.newItem}
                    onChange={this.handleChanges}
                />
                <button type="submit">Add</button>
            </form>
        );
    }

}

export default TodoForm;
