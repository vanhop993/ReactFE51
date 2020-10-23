import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DemoStaleless from "./Components/DemoStaleless";
import DemoStateFull from "./Components/DemoStateFull";
import BaiTapLayout from "./Components/bai_tap_layout_component/BaiTapLayout";
import Databinding from "./Databinding/Databinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import DemoConditionalandState from "./Demologin/DemoConditionalandState";
import BaiTapChonMauXe from "./BTDoiMauXe";
import ListAndKey from "./RenderVsArray(ListAndKeys)/ListAndKey";
import DemoProps from "./Props/DemoProps";
import BTGioHang from "./BT_GioHang/BTGioHang";
import BaiTapGioHangRedux from "./BT_GioHangRedux/BaiTapGioHangRedux";
import BaiTapGameXucXac from "./BaiTapGameXucXac/BaiTapGameXucXac";
import Life_cycle from "./Life_cycle/Life_cycle";
import DanhSachNguoiDung from "./FormComponent/DanhSachNguoiDung";

function App() {
  return (
    <div className="App">
      {/* <DemoStaleless /> */}
      {/* <DemoStateFull /> */}
      {/* <BaiTapLayout/> */}
      {/* <Databinding/> */}
      {/* <HandleEvent/> */}
      {/* <DemoConditionalandState /> */}
      {/* <BaiTapChonMauXe /> */}
      {/* <ListAndKey /> */}
      {/* <DemoProps /> */}
      {/* <BTGioHang /> */}
      {/* <BaiTapGioHangRedux /> */}
      {/* <BaiTapGameXucXac /> */}
      {/* <Life_cycle/> */}
      <DanhSachNguoiDung />
    </div>
  );
}

export default App;
