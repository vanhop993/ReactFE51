import React, { Component } from "react";
import { connect } from "react-redux";
import GioHang from "../BT_GioHang/GioHang";

class SanPhamGioHang extends Component {
  renderSPGH = () =>
    this.props.gioHang.map((spGH, index) => (
      <tr key={index}>
        <td>{spGH.maSP}</td>
        <td>{spGH.tenSP}</td>
        <td>
          <img src={spGH.hinhAnh} alt="" width={70} height={75} />
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.tangGiam(spGH.maSP, -1)}
          >
            -
          </button>
          {spGH.soLuong}
          <button
            className="btn btn-success"
            onClick={() => this.props.tangGiam(spGH.maSP, 1)}
          >
            +
          </button>
        </td>
        <td>{spGH.giaBan.toLocaleString()}</td>
        <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.xoaSPGH(spGH.maSP)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  render() {
    return <>{this.renderSPGH()}</>;
  }
}
const mapStateToProps = (state) => {
  return {
    gioHang: state.BaiTapGioHangReducers.gioHang,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    xoaSPGH: (maSP) => {
      dispatch({
        type: "XOA_SP_TRONG_GIO_HANG",
        maSP,
      });
    },
    tangGiam: (maSP, tangGiam) => {
      dispatch({
        type: "TANG_GIAM_SL",
        maSP,
        tangGiam,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SanPhamGioHang);
