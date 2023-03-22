import Loading from "../loading/Loading";
import "./Box.css";

const BoxList = (props) => {
  const dataOld = [];

  return (
    <>
      <div className="container-list">
      {props.isLoading ? <Loading/> : ''}
        <ul>
          {props.listPass.map((pass) => (
            <>
              <li key={pass.id}>{pass.password}</li>
              {dataOld.push(pass)}
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BoxList;
