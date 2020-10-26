import React from "react";
import { useState } from "react";
//const arr = []; các giá trị không phải state , không cần render lại khi setState => để ở ngoài component

export default function BaiTapDoiMauXe() {
  const [state, setstate] = useState("./img/car/products/black-car.jpg");
  console.log(state);
  const thayDoiHinh = (color) => {
    const duongDanHinh = `./img/car/products/${color}-car.jpg`;
    setstate(duongDanHinh);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h2>Hình ảnh xe:</h2>
          <img className="w-100" src={state} alt="" />
        </div>
        <div className="col-6">
          <h2>Chọn màu xe:</h2>
          <button
            className="btn btn-dark mr-3"
            onClick={() => {
              thayDoiHinh("black");
            }}
          >
            Black color
          </button>
          <button
            className="btn btn-danger mr-3"
            onClick={() => {
              thayDoiHinh("red");
            }}
          >
            Red color
          </button>
          <button
            className="btn btn-light mr-3"
            onClick={() => {
              thayDoiHinh("silver");
            }}
          >
            Silver color
          </button>
          <button
            className="btn mr-3"
            style={{ backgroundColor: "#84888d", color: "white" }}
            onClick={() => {
              thayDoiHinh("steel");
            }}
          >
            Steel color
          </button>
        </div>
      </div>
    </div>
  );
}
