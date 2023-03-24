import "./Box.css";

const BoxData = (props) => {
  const createElement = () => {
    if (props.value === "Generator Password") {
      return (
        <>
          <p className="generator">{props.value}</p>
        </>
      );
    } else {
      return (
        <>
          <p className="generate">{props.value}</p>
        </>
      );
    }
  };

  return (
    <>
      <div className="containner-box">
        {/* <p>{props.value}</p> */}
        {createElement()}
      </div>
    </>
  );
};

export default BoxData;
