const stateDefault = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "iphone",
      hinhAnh: "./img/applephone.jpg",
      soLuong: 1,
      giaBan: 1000,
    },
  ],
};

const BaiTapGioHangReducers = (state = stateDefault, action) => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};
export default BaiTapGioHangReducers;
