import "./Box.css";

const BoxData = ({ generate, image }) => {
  return (
    generate == "Generator Password" ? (
      <div className="containner-box">
        <p>{generate}</p>
      </div>
    ) : (
      <div className="containner-box generate">
        <p>{generate}</p>
      </div>
    )
  );
};

export default BoxData;
