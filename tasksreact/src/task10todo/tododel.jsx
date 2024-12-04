import React from "react";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = { todo: "", list: [],  };
  }

  Change = (event) => {
    this.setState({ todo: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Check the todo is empty or consists only of whitespace
  if (this.state.todo.trim() === "") {
    return (window.alert("enter data")); 
  }

    this.setState((prevstate) => {
      console.log("previous state :", prevstate.list);
      return { list: [...prevstate.list, prevstate.todo], todo: "" }; //adds the new todo to the list with existing data
    });
  };

  delete = (index) => {
    this.setState((prevstate) => {
      const newList = prevstate.list.filter((_, i) => i !== index); // Create a new array excluding the item at the specified index
      console.log("new list after delating : ",newList)
      return { list: newList }; // Update the state with the new list
    });
  };

  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit}>
          <input
            id="todo"
            type="text"
            placeholder="add day schedule"
            name="todo"
            onChange={this.Change}
            value={this.state.todo}
          />
          <input type="submit" />
        </form>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>{item}<button>edit</button><button onClick={()=>this.delete(index)}>remove</button></li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Todo;
