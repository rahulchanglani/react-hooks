import { useCallback, useState } from "react";
import Child from "./Child";

// used when fn is passed as prop to child component , it will recreate itself in re-render
// can store the memoized function in itself 

export default function CallBackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Callback string in Parent ");

//   const returnComment = () => {
//       return data;
//     };
  
  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div className="App">
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}