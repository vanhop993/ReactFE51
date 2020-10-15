import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    let { sanPham, themGioHang } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={sanPham.hinhAnh}
          alt={sanPham.tenSP}
          width={200}
          height={350}
        />
        <div className="card-body">
          <h4 className="card-title text-center">{sanPham.tenSP}</h4>
          <p className="card-text text-center">
            {sanPham.giaBan.toLocaleString()}
          </p>
          <div className="text-center">
            <button
              className="btn btn-success"
              onClick={() => themGioHang(sanPham)}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sp) => {
      dispatch({
        type: "THEM_GIO_HANG",
        sp,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(SanPhamRedux);
