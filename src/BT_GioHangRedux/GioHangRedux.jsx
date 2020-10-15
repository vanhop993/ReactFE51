import React, { Component } from "react";
import SanPhamGioHang from "./SanPhamGioHang";
import { connect } from "react-redux";

class GioHangRedux extends Component {
  // renderGioHang = () => {
  //   let { gioHang } = this.props;
  //   return gioHang.map((spGH, index) => <SanPhamGioHang key={index} />);
  // };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Số lượng </th>
            <th>Đơn giá </th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          <SanPhamGioHang />
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gioHang: state.BaiTapGioHangReducers.gioHang,
  };
};
export default connect(mapStateToProps, null)(GioHangRedux);
