import React, { Component } from "react";
import FormComponent from "./FormComponent";
import { connect } from "react-redux";
import {
  xoaNguoiDung,
  suaNguoiDung,
} from "../Redux/action/FormComponentAction";
import NewFormComponent from "./NewFormComponent";

class DanhSachNguoiDung extends Component {
  renderDanhSachNguoiDung = () => {
    let { mangNguoiDung } = this.props;
    return mangNguoiDung.map((nguoiDung) => (
      <tr key={nguoiDung.maNguoiDung}>
        <td>{nguoiDung.maNguoiDung}</td>
        <td>{nguoiDung.tenNguoiDung}</td>
        <td>{nguoiDung.soDienThoai}</td>
        <td>{nguoiDung.email}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() =>
              this.props.dispatch(xoaNguoiDung(nguoiDung.maNguoiDung))
            }
          >
            xóa
          </button>
          <button
            className="btn btn-primary"
            onClick={() => this.props.dispatch(suaNguoiDung(nguoiDung))}
          >
            sửa
          </button>
        </td>
      </tr>
    ));
  };
  render() {
    return (
      <div className="container">
        {/* <FormComponent /> */}
        <NewFormComponent />
        <table className="table">
          <thead className="bg-dark text-light font-weight-boil">
            <tr>
              <th>Mã người dùng</th>
              <th>Tên người dùng </th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderDanhSachNguoiDung()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangNguoiDung: state.FormComponentReducer.mangNguoiDung,
  };
};

export default connect(mapStateToProps)(DanhSachNguoiDung);
