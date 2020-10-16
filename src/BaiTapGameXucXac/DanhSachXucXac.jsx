import React, { Component } from "react";
import { connect } from "react-redux";
import { chonLua } from "../Redux/action/BTXucXacAction";

class DanhSachXucXac extends Component {
  renderArrXucXac = () =>
    this.props.arrXucXac.map((xucXac, index) => (
      <img
        className="m-1"
        src={xucXac.src}
        alt="1.png"
        width={50}
        height={50}
        key={index}
      />
    ));
  render() {
    return (
      <div className="row">
        <div className="col-4 text-center">
          <button
            className="btn btn-primary p-5"
            onClick={() => this.props.dispatch(chonLua("Tài"))}
          >
            <span className="display-4">Tài</span>
          </button>
        </div>
        <div className="col-4 text-center">{this.renderArrXucXac()}</div>
        <div className="col-4 text-center">
          <button
            className="btn btn-danger p-5"
            onClick={() => this.props.dispatch(chonLua("Xỉu"))}
          >
            <span className="display-4">Xỉu</span>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    arrXucXac: state.BaiTapXucXacReducer.arrXucXac,
  };
};

export default connect(mapStateToProps)(DanhSachXucXac);
