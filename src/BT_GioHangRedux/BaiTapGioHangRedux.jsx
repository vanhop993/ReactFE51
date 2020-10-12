import React, { Component } from "react";
import SanPhamRedux from "./SanPhamRedux";
import dataPhone from "../data/dataPhone.json";
import GioHangRedux from "./GioHangRedux";
import { connect } from "react-redux";

class BaiTapGioHangRedux extends Component {
  tinhSoLuongSPGH = () =>
    this.props.gioHang.reduce((tongSL, sp) => (tongSL += sp.soLuong), 0);

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
          <div className="text-right">Gio hàng ({this.tinhSoLuongSPGH()})</div>
          <GioHangRedux />
        </div>
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    gioHang: state.BaiTapGioHangReducers.gioHang,
  };
};
export default connect(mapStateToProps)(BaiTapGioHangRedux);
