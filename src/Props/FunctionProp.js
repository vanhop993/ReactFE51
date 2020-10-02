import React from "react";

export default function functionProp(props) {
  return (
    <div>
      <h3>Function Prop</h3>
      <p>tên : {props.hoVaTen}</p>
      <p>lớp : {props.lop}</p>
    </div>
  );
}
