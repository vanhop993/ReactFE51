import {
  them_nguoi_dung,
  xoa_nguoi_dung,
  SUA_NGUOI_DUNG,
} from "./FromComponentType";

export const themNguoiDung = (nguoiDung, errors) => {
  return {
    type: them_nguoi_dung,
    nguoiDung,
    errors,
  };
};
export const xoaNguoiDung = (maNguoiDung) => {
  return {
    type: xoa_nguoi_dung,
    maNguoiDung,
  };
};
export const suaNguoiDung = (nguoiDung) => {
  return {
    type: SUA_NGUOI_DUNG,
    nguoiDung,
  };
};
