import React, { Component } from "react";

export default class GioHang extends Component {
  renderGioHang = (cardList, xoaSPGH, tangGiamSoLuongSP) =>
    cardList.map((sp, index) => (
      <tr key={index}>
        <td>{sp.maSP}</td>
        <td>{sp.tenSP}</td>
        <td>
          <img src={sp.hinhAnh} alt="" width={50} height={75} />
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => tangGiamSoLuongSP(sp, false)}
          >
            -
          </button>
          {sp.soLuong}
          <button
            className="btn btn-success"
            onClick={() => tangGiamSoLuongSP(sp, true)}
          >
            +
          </button>
        </td>
        <td>{sp.giaBan.toLocaleString()}</td>
        <td>{(sp.soLuong * sp.giaBan).toLocaleString()}</td>
        <td>
          <button className="btn btn-danger" onClick={() => xoaSPGH(sp)}>
            Delete
          </button>
        </td>
      </tr>
    ));
  render() {
    let { cardList, xoaSPGH, tangGiamSoLuongSP } = this.props;
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          role="document"
          style={{ maxWidth: 1000 }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderGioHang(cardList, xoaSPGH, tangGiamSoLuongSP)}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
