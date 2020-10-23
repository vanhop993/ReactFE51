import React, { PureComponent } from "react";
// PureComponent là kiểu component kiểm tra coi props có bị thay đổi ko thì mới render lại , nó chỉ hiểu đc sự thay đổi của các dữ liệu nguyên thủy , nhưng ko hiểu đc sự thay đổi của các kiểu dữ liệu như array , object
export default class Child_component extends PureComponent {
  constructor(props) {
    super(props);
    console.log("constructor child");
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps child");
    return null;
  }

  // hàm này quyết định component có render lại hay ko , nếu hàm này trả về false thì sẽ ko render lại , ngược lại thì cho render lại
  //   shouldComponentUpdate() {
  //     console.log("shouldComponentUpdate child");
  //     return false;
  //   }
  render() {
    console.log("render child");
    return (
      <div>
        <h3>Child number : {this.props.number}</h3>Component Child
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount child");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate child");
  }
  componentWillUnmount() {
    // life cycle chạy trước khi component mất khỏi giao diện
    console.log("componentWillUnmount child");
  }
}
