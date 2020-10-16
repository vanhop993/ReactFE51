import React, { Component } from "react";
import { connect } from "react-redux";
import { playGame } from "../Redux/action/BTXucXacAction";

class KetQuaGame extends Component {
  renderKetQua = () => {
    let tongDiem = this.props.arrXucXac.reduce(
      (tongDiem, xucXac) => (tongDiem += xucXac.name),
      0
    );
    let ketQua = tongDiem > 9 ? "Tài" : "Xỉu";
    return (
      <span className="text-danger">
        {tongDiem} - {ketQua}
      </span>
    );
  };
  render() {
    return (
      <div className="text-center">
        <div className="display-4 ">{this.renderKetQua()}</div>
        <div className="display-4">
          Bạn chọn: <span className="text-success">{this.props.luaChon}</span>
        </div>
        <div className="display-4">
          Số bàn thắng:
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          Số bàn chơi:
          <span className="text-primary">{this.props.soBanChoi}</span>
        </div>
        <button
          className="btn btn-success"
          onClick={() => this.props.dispatch(playGame())}
        >
          Play game
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    arrXucXac: state.BaiTapXucXacReducer.arrXucXac,
    luaChon: state.BaiTapXucXacReducer.luaChon,
    soBanThang: state.BaiTapXucXacReducer.soBanThang,
    soBanChoi: state.BaiTapXucXacReducer.soBanChoi,
    ketQua: state.BaiTapXucXacReducer.ketQua,
  };
};

export default connect(mapStateToProps)(KetQuaGame);
