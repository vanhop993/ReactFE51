import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { dt, xemChiTiet, themGioHang } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={dt.hinhAnh}
          width={200}
          height={350}
          alt
        />
        <div className="card-body">
          <h4 className="card-title">{dt.tenSP}</h4>
          <button className="btn btn-success" onClick={() => xemChiTiet(dt)}>
            Chi tiết
          </button>
          <button className="btn btn-danger" onClick={() => themGioHang(dt)}>
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
