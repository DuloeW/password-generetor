import "./Box.css";

const BoxData = (props) => {
  return (
    <>
      <div className="containner-box">
        <p>{props.value}</p>
      </div>
    </>
  );
};

export default BoxData;
