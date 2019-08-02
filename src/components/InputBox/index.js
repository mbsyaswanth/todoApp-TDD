import React, { Component } from "react";

class InputBox extends Component {
  onSubmit = event => {
    if (event.keyCode === 13) {
      this.props.submit(event.target.value);
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onKeyDown={this.onSubmit}
          placeholder="what needs to be done ?"
        />
      </div>
    );
  }
}

export default InputBox;
