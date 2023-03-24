import React, { useEffect, useState } from "react";
import "./Loading.css";

const Loading = (props) => {
  let [second, setSecond] = useState(props.second);
  useEffect(() => {
    if (second > 0) {
      second -= 1;
      setTimeout(() => {
        setSecond(second);
      }, 1000);
    }
  }, [second]);

  return (
    <>
      <div className="container-loading">
        <div className="loading-relative">
            <div className="icon"></div>
            <p>Creating...</p>
            <span className="second-time">{second}</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
