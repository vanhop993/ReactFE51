/**
 * 1/ dàn layout
 * 2/ xác đinh data thay đổi và lưu vào trong state- done
 * 3/ lấy data trong state đi binding ra jsx
 * 4/ bắt sự kiện click cho các nút chọn màu
 * 5/ cập nhập lại giá trị state
 */
import React, { Component } from "react";

export default class BaiTapChonMauXe extends Component {
  state = {
    imgCard: "./img/car/products/black-car.jpg",
  };
  changeImgCar = (imgCard) => {
    // this.setState({ imgCar: srcImg }); cách này ko sai nhưng hơi dài.
    this.setState({ imgCard }); // object literal là đặt tên biến trùng nhau
  };
  render() {
    return (
      <section className="show-room">
        <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
        <div className="container">
          <div className="chose__color d-flex justify-content-around">
            <button
              className="btn"
              onClick={() => {
                this.changeImgCar("./img/car/products/black-car.jpg");
              }}
            >
              <img
                src="./img/car/icons/icon-black.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              className="btn"
              onClick={() => {
                this.changeImgCar("./img/car/products/red-car.jpg");
              }}
            >
              <img
                src="./img/car/icons/icon-red.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              className="btn"
              onClick={() => {
                this.changeImgCar("./img/car/products/silver-car.jpg");
              }}
            >
              <img
                src="./img/car/icons/icon-silver.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              className="btn"
              onClick={() => {
                this.changeImgCar("./img/car/products/steel-car.jpg");
              }}
            >
              <img
                src="./img/car/icons/icon-steel.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
          </div>
          <div className="car mt-2">
            <img
              className="img-thumbnail"
              src={this.state.imgCard}
              alt="hinh"
            />
          </div>
        </div>
      </section>
    );
  }
}
