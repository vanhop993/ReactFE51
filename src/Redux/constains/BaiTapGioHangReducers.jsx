import { connect } from "react-redux";

const stateDefault = {
  gioHang: [],
};

const BaiTapGioHangReducers = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHangUpdate = [...state.gioHang];
      let sp = state.gioHang.find((spGH) => spGH.maSP === action.sp.maSP);
      sp
        ? (sp.soLuong += 1)
        : (gioHangUpdate = [...gioHangUpdate, { ...action.sp, soLuong: 1 }]);
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    case "XOA_SP_TRONG_GIO_HANG": {
      let gioHangUpdate = state.gioHang.filter(
        (spGH) => spGH.maSP !== action.maSP
      );
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    case "TANG_GIAM_SL": {
      let gioHangUpdate = [...state.gioHang];
      let index = gioHangUpdate.findIndex((spGH) => spGH.maSP === action.maSP);
      gioHangUpdate[index].soLuong += action.tangGiam;
      if (gioHangUpdate[index].soLuong < 1) {
        gioHangUpdate[index].soLuong = 1;
      }
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
export default BaiTapGioHangReducers;
