import React, { Component } from "react";
import swal from "sweetalert2";
import { connect } from "react-redux";
import {
  themNguoiDung,
  xoaNguoiDung,
} from "../Redux/action/FormComponentAction";

class FormComponent extends Component {
  state = {
    values: { maNguoiDung: "", tenNguoiDung: "", soDienThoai: "", email: "" },
    errors: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
    maNguoiDungXoa: "",
  };
  handleChangeInput = (e) => {
    // lấy ra name và value
    let { name, value } = e.target;
    // lấy ra attribute  types (các thuộc tính trên thẻ tự thêm gọi là attribute)
    let types = e.target.getAttribute("types");
    let newValue = { ...this.state.values };
    let newErrors = { ...this.state.errors };
    let newMaNguoiDungXoa = this.state.maNguoiDungXoa;
    newErrors[name] = value.trim() === "" ? "không được bỏ trống!!" : "";
    // validation các trường đặc biệt
    if (types === "phoneNumber") {
      const regexNumber = /^\d+$/;
      if (!regexNumber.test(value.trim())) {
        newErrors[name] = "Dữ liệu phải là số!";
      }
    }
    if (types === "email") {
      const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regexEmail.test(value.trim())) {
        newErrors[name] = "Dữ liệu phải là email!";
      }
    }
    newValue[name] = value;
    this.setState({
      values: newValue,
      errors: newErrors,
    });
  };

  // giải pháp 1 sử dụng life cycle cũ  componentWillReceiveProps , hàm này chạy trước khi render và khi props thay đổi
  // để giải quyết việc không nhập được dữ liệu khi chỉnh sửa
  componentWillReceiveProps(newProps) {
    this.setState({
      values: newProps.nguoiDungChinhSua,
    });
  }
  render() {
    let { maNguoiDung, tenNguoiDung, soDienThoai, email } = this.state.values;
    return (
      <form
        className="card"
        onSubmit={(e) => {
          e.preventDefault();
          let valid = true;
          // duyệt thuộc tính trong object values (duyệt thuộc tính trong đối tượng thì dùng ES6  for in )
          for (let tenThuocTinh in this.state.values) {
            if (this.state.values[tenThuocTinh].trim() === "") {
              valid = false;
            }
          }
          for (let tenThuocTinh in this.state.errors) {
            if (this.state.errors[tenThuocTinh] !== "") {
              valid = false;
            }
          }
          if (!valid) {
            // alert("Dữ liệu ko hợp lệ!");
            swal.fire("Thông báo", "Dữ liệu không hợp lệ", "error");
            return;
          }
          swal.fire("Thông báo", "Thêm dữ liệu thành công", "success");
        }}
      >
        <div className="card-header bg-dark text-light font-weight-bold">
          <span>THÔNG TIN NGƯỜI DÙNG</span>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <span>Mã người dùng: </span>
                <input
                  value={maNguoiDung}
                  className="form-control"
                  name="maNguoiDung"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.maNguoiDung}</p>
              </div>
              <div className="form-group">
                <span>Tên người dùng: </span>
                <input
                  value={tenNguoiDung}
                  className="form-control"
                  name="tenNguoiDung"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.tenNguoiDung}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <span>Số điện thoại: </span>
                <input
                  types="phoneNumber" // đâu là thuộc tính tự chế
                  value={soDienThoai}
                  className="form-control"
                  name="soDienThoai"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.soDienThoai}</p>
              </div>
              <div className="form-group">
                <span>Email: </span>
                <input
                  types="email" // đâu là thuộc tính tự chế
                  value={email}
                  className="form-control"
                  name="email"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.email}</p>
              </div>
            </div>
            <div className="text-center col-12">
              <button
                className="btn btn-success"
                onClick={(e) =>
                  this.props.dispatch(
                    themNguoiDung(this.state.values, this.state.errors)
                  )
                }
              >
                Thêm người dùng
              </button>
              <button className="btn btn-success ml-1">Cập nhập</button>
            </div>
            <div className="col-12">
              <div className="form-group">
                <span>mã người dùng : </span>
                <input
                  types="text" // đây là thuộc tính tự chế
                  className="form-control"
                  name="maNguoiDungXoa"
                  placeholder="Mã người dùng cần xòa"
                  onChange={(e) => {
                    let maXoa = e.target.value;
                    this.setState({
                      maNguoiDungXoa: maXoa,
                    });
                  }}
                />
                <div className="text-center">
                  <button
                    className="btn btn-success"
                    type="button"
                    onClick={() =>
                      this.props.dispatch(
                        xoaNguoiDung(this.state.maNguoiDungXoa)
                      )
                    }
                  >
                    xóa người dùng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    nguoiDungChinhSua: state.FormComponentReducer.nguoiDungChinhSua,
  };
};

export default connect(mapStateToProps)(FormComponent);
