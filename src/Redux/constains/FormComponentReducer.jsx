import {
  SUA_NGUOI_DUNG,
  them_nguoi_dung,
  xoa_nguoi_dung,
} from "../action/FromComponentType";

const stateDefault = {
  mangNguoiDung: [
    {
      maNguoiDung: 1,
      tenNguoiDung: "Nguyễn Văn A",
      soDienThoai: "0909090909",
      email: "vanA@gmail.com",
    },
    {
      maNguoiDung: 2,
      tenNguoiDung: "Sếp wang",
      soDienThoai: "0909090999",
      email: "SepWang@gmail.com",
    },
  ],
  nguoiDungChinhSua: {
    maNguoiDung: "",
    tenNguoiDung: "",
    soDienThoai: "",
    email: "",
  },
  stateForm: {
    values: { maNguoiDung: "", tenNguoiDung: "", soDienThoai: "", email: "" },
    errors: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
    maNguoiDungXoa: "",
  },
};

export const FormComponentReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case them_nguoi_dung: {
      return {
        ...state,
        mangNguoiDung: [...state.mangNguoiDung, action.nguoiDung],
      };
    }
    case xoa_nguoi_dung: {
      state.mangNguoiDung = state.mangNguoiDung.filter(
        (nguoiDung) => nguoiDung.maNguoiDung != action.maNguoiDung
      );
      return { ...state };
    }
    case SUA_NGUOI_DUNG: {
      let nguoiDungClick = { ...action.nguoiDung };
      state.nguoiDungChinhSua = nguoiDungClick;
      state.stateForm = { ...state.stateForm, values: nguoiDungClick };
      return { ...state };
    }
    case "HANDLE_CHANGE_INPUT": {
      state.stateForm = { ...action.newState };
      return { ...state };
    }
    case "CAP_NHAP_THONG_TIN": {
      let mangNguoiDungCapNhap = [...state.mangNguoiDung];
      let index = mangNguoiDungCapNhap.findIndex(
        (nguoiDung) =>
          nguoiDung.maNguoiDung === action.nguoiDungCapNhap.maNguoiDung
      );
      mangNguoiDungCapNhap[index] = action.nguoiDungCapNhap;
      state.mangNguoiDung = mangNguoiDungCapNhap;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
