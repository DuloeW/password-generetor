import React, { useState } from "react";
import Loading from "../loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import "./Box.css";

const BoxList = (props) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const copyPass = (index) => {
    navigator.clipboard.writeText(props.listPass[index].password);
    console.log(props.listPass[index]);
    setActiveIndex(index);
  };

  return (
    <>
      <div className="container-list">
        {props.isLoading ? <Loading second={props.second} /> : ""}
        <ul>
          {props.listPass.map((pass, index) => (
            <div key={pass.id} className="container-copy-list">
              <FontAwesomeIcon
                icon={activeIndex === index ? faCircleCheck : faClone}
                onClick={() => copyPass(index)}
              />
              <li key={pass.id}>{pass.password}</li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BoxList;
