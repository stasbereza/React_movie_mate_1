import React, { Component } from "react";
import "./styles.css";

export default class Main extends Component {
  render() {
    return <div className="Main">{this.props.children}</div>;
  }
}

