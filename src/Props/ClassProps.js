import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    return (
      <div>
        <h2>Class Props</h2>
        <p>tên : {this.props.hoVaTen}</p>
        <p>lớp : {this.props.lop}</p>
      </div>
    );
  }
}
