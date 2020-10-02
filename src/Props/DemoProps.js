import React, { Component } from "react";
import FunctionProps from "./FunctionProp";
import ClassProps from "./ClassProps";

export default class demoProps extends Component {
  state = {
    ten: "Đỗ Văn Hợp",
    lop: 51,
  };
  render() {
    return (
      <div>
        <h2>Props truyền dữ liệu giữa các components</h2>
        <FunctionProps
          // cách truyền props trong reactjs
          hoVaTen={this.state.ten}
          lop={this.state.lop}
        />
        <ClassProps hoVaTen={this.state.ten} lop={this.state.lop} />
      </div>
    );
  }
}
