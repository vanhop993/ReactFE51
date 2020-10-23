import { combineReducers } from "redux";
import BaiTapGioHangReducers from "../constains/BaiTapGioHangReducers";
import { BaiTapXucXacReducer } from "../constains/BaiTapXucXacReducer";
import { FormComponentReducer } from "../constains/FormComponentReducer";

export const rootReducers = combineReducers({
  // nơi khai báo các state
  BaiTapGioHangReducers,
  BaiTapXucXacReducer,
  FormComponentReducer,
});
