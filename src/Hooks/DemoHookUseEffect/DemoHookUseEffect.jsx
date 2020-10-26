import React from "react";
import { useState, useEffect } from "react";

export default function DemoHookUseEffect(props) {
  const [number, setNumber] = useState(1);
  const [obj, setObj] = useState({ number: 1 });
  // useEffect(() => {
  //   // hàm này sẽ chạy khi lần đầu component render và các lần render lại ( thay thế cho 2 life cycle là componentDidMount vs componentDidUpdate)
  //   console.log("componentDidMount");
  //   console.log("componentDidUpdate");
  // });
  // useEffect(() => {
  //   // tham số 2 mảng rỗng => chỉ thay thế cho componentDidMount
  //   console.log("componentDidMount");
  // }, []);
  useEffect(() => {
    // tham số 2 mảng là giá trị thay đổi thì hàm này sẽ thực thi  => thay thế cho componentDidUpdate
    console.log("componentDidUpdate");
  }, [obj]); // có thể thêm nhiều biến state ở tham số thứ 2 , ở đây chỉ hiểu đc các kiểu dữ liệu nguyên thủy , nếu là obj thì nó sẽ không hiểu và ko render lại

  useEffect(() => {
    return () => {
      // hủy component sẽ gọi hàm này
      console.log("thay cho componentwillUnMount");
    };
  });
  return (
    <div className="container d-flex">
      {/* <h1 className="mr-5">{number}</h1> */}
      <h1 className="mr-5">{obj.number}</h1>
      <button
        onClick={() => {
          // setNumber(number + 1);
          let newObj = { ...obj };
          newObj.number += 1;
          setObj({ number: newObj.number });
        }}
      >
        +
      </button>
    </div>
  );
}
