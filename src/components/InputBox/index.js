import React, { Component } from "react";

class InputBox extends Component {
  state = {
    value: ""
  };
  onSubmit = event => {
    if (event.keyCode === 13) {
      this.props.submit(this.state.value);
    }
  };

  updateState = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.updateState}
          onKeyDown={this.onSubmit}
          placeholder="what needs to be done ?"
        />
      </div>
    );
  }
}

export default InputBox;
