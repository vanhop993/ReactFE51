import React from "react";
import KetQua from "./KetQua";
import XucXacF from "./XucXacF";

export default function GameXucXacRfc(props) {
  return (
    <div
      style={{
        backgroundImage: "url(./img/gameXucXac/bgGame.png)",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <h1 className="display-4 text-center">BÀI TẬP GAME XÚC XẮC</h1>
      <XucXacF />
      <KetQua />
    </div>
  );
}
