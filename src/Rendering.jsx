import { Component } from "react";

class Rendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      inputVal: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const trimmed = this.state.inputVal.trim();
    if (trimmed === "") return;

    this.setState(
      (state) => ({
        todos: [...state.todos, trimmed],
        inputVal: "",
      }),
      () => {
        if (typeof this.props.updateTodoCount === "function") {
          this.props.updateTodoCount(this.state.todos.length);
        }
      }
    );
  }

  handleDelete(todoToDelete) {
    this.setState(
      (state) => ({
        todos: state.todos.filter((todo) => todo !== todoToDelete),
      }),
      () => {
        if (typeof this.props.updateTodoCount === "function") {
          this.props.updateTodoCount(this.state.todos.length);
        }
      }
    );
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            id="task-entry"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>
              {todo}{" "}
              <button onClick={() => this.handleDelete(todo)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Rendering;

