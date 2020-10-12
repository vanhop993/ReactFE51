import React, { Component } from "react";

export default class SanPhamGioHang extends Component {
  render() {
    let { spGH } = this.props;
    return (
      <tr>
        <td>{spGH.maSP}</td>
        <td>{spGH.tenSP}</td>
        <td>
          <img src={spGH.hinhAnh} alt="" width={70} height={75} />
        </td>
        <td>{spGH.soLuong}</td>
        <td>{spGH.giaBan}</td>
        <td>{spGH.soLuong * spGH.giaBan}</td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}
