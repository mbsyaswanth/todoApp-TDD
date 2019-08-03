import React, { Component } from "react";
import { filters } from "../../constants";

class TodoFooter extends Component {
  handleClick = event => {
    if (event.target.value === "All") {
      this.props.setFilter(filters.all);
      return;
    }
    if (event.target.value === "Completed") {
      this.props.setFilter(filters.completed);
      return;
    }
    if (event.target.value === "Active") {
      this.props.setFilter(filters.active);
      return;
    }
  };
  render() {
    return (
      <div>
        <span data-testid="todocount">{this.props.count + " items left"} </span>
        <input value="All" type="button" onClick={this.handleClick} />
        <input value="Completed" type="button" onClick={this.handleClick} />
        <input value="Active" type="button" onClick={this.handleClick} />
        <input
          value="Clear Completed"
          type="button"
          onClick={this.props.clearCompleted}
        />
      </div>
    );
  }
}

export default TodoFooter;
