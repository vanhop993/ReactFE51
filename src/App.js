import React from 'react';
import logo from './logo.svg';
import './App.css';
import DemoStaleless from './Components/DemoStaleless';
import DemoStateFull from './Components/DemoStateFull';
import BaiTapLayout from './Components/bai_tap_layout_component/BaiTapLayout';
import Databinding from './Databinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';

function App() {
  return (
    <div className="App">
      {/* <DemoStaleless />
      <DemoStateFull /> */}
      {/* <BaiTapLayout/> */}
      {/* <Databinding/> */}
      <HandleEvent/>
    </div>
  );
}

export default App;
