import { Component } from "react";
import Rendering from "./Rendering";

class CountTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoCount: 0
    };

    this.updateTodoCount = this.updateTodoCount.bind(this);
  }

  updateTodoCount(newCount) {
    this.setState({ todoCount: newCount });
  }

  render() {
    return (
      <section>
        <h2>Total Todos: {this.state.todoCount}</h2>
        <Rendering name="Todo App" updateTodoCount={this.updateTodoCount} />
      </section>
    );
  }
}

export default CountTodo;

