/**
 * các bước thực hiện
 * b1 : dàn layout
 * b2 : xác định dữ liệu thay đổi và lưu vào state
 * b3 : lấy data trong state đi binding ra jsx
 * b4 : duyệt mảng render danh sách sản phẩm
 * b5 : xây dựng chức năng xem chi tiết
 * b6 : xây dựng chức năng thêm vào giỏ hàng
 * b7 : xây dựng chức năng tăng giảm số lượng
 * b8 : xây dựng chức năng xóa sản phẩm khỏi giỏ hàng
 * b9 : xây dựng chức năng hiển thị tổng số sản phẩm trong giỏ hàng
 *
 */

import React, { Component } from "react";
import dataPhone from "../data/dataPhone.json";
import GioHang from "./GioHang";
import SanPham from "./SanPham";

export default class BTGioHang extends Component {
  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    cardList: [],
  };

  xemChiTiet = (sanPhamChiTiet) => {
    this.setState({
      sanPhamChiTiet,
    });
  };

  themGioHang = (dt) => {
    const newCard = { ...dt, soLuong: 1 };
    const cardList = [...this.state.cardList];
    let index = cardList.findIndex((phone, index) => phone.maSP === dt.maSP);
    index === -1 ? cardList.push(newCard) : (cardList[index].soLuong += 1);
    this.setState({
      cardList,
    });
  };

  xoaSPGH = (dt) => {
    let cardList = [...this.state.cardList];
    let index = cardList.findIndex((phone, index) => phone.maSP === dt.maSP);
    if (index !== -1) {
      cardList.splice(index, 1);
    }
    this.setState({
      cardList,
    });
  };

  tinhSoSPTrongGioHang = () =>
    this.state.cardList.reduce(
      (tinhTong, item, index) => (tinhTong += item.soLuong),
      0
    );
  tongTien = () =>
    this.state.cardList.reduce(
      (tongTien, spGH) => (tongTien += spGH.soLuong * spGH.giaBan),
      0
    );
  tangGiamSoLuongSP = (sp, tangGiam) => {
    let cardList = [...this.state.cardList];
    let index = cardList.findIndex((card, index) => card.maSP === sp.maSP);
    tangGiam
      ? (cardList[index].soLuong += 1)
      : cardList[index].soLuong === 1
      ? (cardList[index].soLuong = 1)
      : (cardList[index].soLuong -= 1);

    this.setState({
      cardList,
    });
  };

  renderSanPham = () =>
    dataPhone.map((dt, index) => (
      <div className="col-4">
        <SanPham
          dt={dt}
          xemChiTiet={this.xemChiTiet}
          themGioHang={this.themGioHang}
          key={index}
        />
      </div>
    ));

  render() {
    return (
      <section className="container">
        <h3 className="title text-center">Bài tập giỏ hàng</h3>
        <div className="container text-center my-2">
          <button
            className="btn btn-danger "
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.tinhSoSPTrongGioHang()}-
            {this.tongTien().toLocaleString()})
          </button>
        </div>
        <div className="container danh-sach-san-pham">
          <div className="row">{this.renderSanPham()}</div>
        </div>
        <GioHang
          cardList={this.state.cardList}
          xoaSPGH={this.xoaSPGH}
          tangGiamSoLuongSP={this.tangGiamSoLuongSP}
        />
        <div className="row">
          <div className="col-sm-5">
            <img
              className="img-fluid"
              src={this.state.sanPhamChiTiet.hinhAnh}
              alt
            />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{this.state.sanPhamChiTiet.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{this.state.sanPhamChiTiet.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{this.state.sanPhamChiTiet.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
}
