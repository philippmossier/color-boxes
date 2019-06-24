import React, { Component } from "react";
import "./Box.css";
import { choice } from "./Helper";

class Box extends Component {
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = { color: choice(this.props.colors) };
    this.clickHandler = this.clickHandler.bind(this);
  }

  pickColor() {
    let newColor;
    do {
      newColor = choice(this.props.colors);
    } while (newColor === this.state.color);
    this.setState({ color: newColor });
  }

  clickHandler() {
    this.pickColor();
  }
  render() {
    return (
      <div
        style={{ backgroundColor: this.state.color }}
        onClick={this.clickHandler}
        className="Box"
      />
    );
  }
}

export default Box;
