import { combineReducers } from "redux";
import BaiTapGioHangReducers from "../constains/BaiTapGioHangReducers";
import { BaiTapXucXacReducer } from "../constains/BaiTapXucXacReducer";

export const rootReducers = combineReducers({
  // nơi khai báo các state
  BaiTapGioHangReducers,
  BaiTapXucXacReducer,
});
