import React from "react";
import { connect, useSelector } from "react-redux"; // useSelector là hook dùng để thay thế cách connect redux cũ

export default function XucXacF(props) {
  // useSelector là hook thay thế cho phương thức mapStateToProps của react-redux
  const { arrXucXac } = useSelector((state) => state.BaiTapXucXacReducer);
  const renderXucXac = () => {
    return arrXucXac.map((xucXac, index) => {
      return <img src={xucXac.src} alt={xucXac.src} width={50} />;
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 text-center">
          <button className="btn btn-success p-5">
            <span className=" display-4">Tài</span>
          </button>
        </div>
        <div className="col-4 text-center">{renderXucXac()}</div>
        <div className="col-4 text-center">
          <button className="btn btn-danger p-5">
            <span className=" display-4">Xỉu</span>
          </button>
        </div>
      </div>
    </div>
  );
}
// đây là cách dùng redux cũ .
// const mapStateToProps = (state) => {
//   return {
//     arrXucXac: state.BaiTapXucXacReducer.arrXucXac,
//   };
// };

// export default connect(mapStateToProps)(XucXacF);
