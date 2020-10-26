import React, { memo } from "react"; // khai báo thêm memo để sử dụng kiểm tra sự thay đổi của props
const Comment = (props) => {
  console.log("comment");
  return (
    <div>
      <textarea></textarea> <br />
      <button>Gửi</button>
    </div>
  );
};
export default memo(Comment); // cái memo này giống pure component trong class component .
