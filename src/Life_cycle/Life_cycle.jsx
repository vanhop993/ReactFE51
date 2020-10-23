import React, { Component } from "react";
import Child_component from "./Child_component";

export default class Life_cycle extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 1 };
    console.log("constructor");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDervivedStateFromProps");
    return null;
  }
  render() {
    console.log("render");
    return (
      <div>
        123
        <h1>Life Cycle: {this.state.number}</h1>
        <button
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>
        {/* {this.state.number < 3 ? <Child_component /> : ""} */}
        <Child_component number={this.state.number} />
      </div>
    );
  }
  componentDidMount() {
    // gọi API tại didmount
    console.log("componentDidMount");
  }
  // Hàm này chạy khi setState hoặc thay đổi Props
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}
