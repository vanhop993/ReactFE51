import React, { Component } from "react";
import SanPhamRedux from "./SanPhamRedux";
import dataPhone from "../data/dataPhone.json";
import GioHangRedux from "./GioHangRedux";

export default class BaiTapGioHangRedux extends Component {
  renderSanPham = () =>
    dataPhone.map((sanPham, index) => (
      <div className="col-4" key={index}>
        <SanPhamRedux sanPham={sanPham} />
      </div>
    ));
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Bài tập giỏ hàng redux</h3>
        <div className="">
          <div className="text-right">Gio hàng (0)</div>
          <GioHangRedux />
        </div>
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}
