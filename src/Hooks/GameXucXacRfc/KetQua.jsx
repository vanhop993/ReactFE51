import React from "react";
import { useDispatch } from "react-redux";
import { playGame } from "../../Redux/action/BTXucXacAction";

export default function KetQua(props) {
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <button className="btn btn-success" onClick={() => dispatch(playGame())}>
        Play game
      </button>
    </div>
  );
}
