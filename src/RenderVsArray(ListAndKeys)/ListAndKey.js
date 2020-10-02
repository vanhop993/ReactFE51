import React, { Component } from "react";

export default class extends Component {
  danhSachKhoaHoc = ["NodeJS", "ReactJS", "VueJS"];
  renderDanhSachKhoaHoc = () => {
    return this.danhSachKhoaHoc.map((khoaHoc, index) => {
      return <li>{khoaHoc}</li>;
    });
  };

  // nâng cao
  //   renderDanhSachKhoaHoc = () => this.danhSachKhoaHoc.map((khoaHoc, index) => <li>{khoaHoc}</li>
  //     );

  render() {
    return (
      <div>
        <h2>list and keys</h2>
        <h3>Danh sách khóa học</h3>
        <ul>{this.renderDanhSachKhoaHoc()}</ul>
      </div>
    );
  }
}
