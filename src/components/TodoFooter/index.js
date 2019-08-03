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
        <input value="All" type="button" onClick={this.handleClick} />
        <input value="Completed" type="button" onClick={this.handleClick} />
        <input value="Active" type="button" onClick={this.handleClick} />
      </div>
    );
  }
}

export default TodoFooter;
