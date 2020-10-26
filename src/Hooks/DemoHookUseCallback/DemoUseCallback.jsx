import React, { useState, useCallback } from "react";
import Comment from "./Comment";

export default function DemoUseCallback(props) {
  let [like, setLike] = useState(1);

  let renderNotify = () => {
    return `Bạn đã thả ${like} ♥ !`;
  };
  const callbackRenderNotify = useCallback(renderNotify, []); // hàm useCallback để mảng rỗng thì nó sẽ không thay đổi hàm renderNotify => khi truyền hàm renderNotify xuống Comment thì nó sẽ không render lại vì hàm renderNotify không thay đổi

  return (
    <div className="m-5">
      Like: {like} ♥
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </span>
      <br />
      <br />
      <Comment renderNotify={callbackRenderNotify} />
    </div>
  );
}
