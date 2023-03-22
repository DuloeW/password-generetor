import "./App.css";
import { useState } from "react";
import BoxData from "./components/box/BoxData";
import BoxList from "./components/box/BoxList";

let id = 0;
let isLoading = false

function App() {
  const [value, setValue] = useState("");
  const [, setPassword] = useState("");
  const [listPass, setListPass] = useState([]);


  const createRandomPassword = (e) => {
    const randomInt = Math.round(Math.random() * 10000);
    const date = new Date();
    const randomPass = `${randomInt}!(+${e.replace(
      " ",
      "%20"
    )}${date.getTime()}`;
    return randomPass;
  };

  const customDelay = () => {
    return Math.round(Math.random() * 10000)
  }

  const createList = (value) => {
    if (value !== "") {
      isLoading = true
      setValue("");
      setPassword("");
      setTimeout(() => {
        isLoading = false
        setListPass([
          ...listPass,
          { id: id++, password: createRandomPassword(value) },
        ]);
      }, customDelay());
    } else {
      alert("Isi terlrbih Dahulu");
    }
  };

  return (
    <div className="App-header">
      <div className="container-view-create">
        <BoxData value={isLoading ? "Genereting Password" : "Generator Password"} />
        <div className="container-input-pass">
          <div className="container-name">
            <input
              className="input-value"
              type={"text"}
              value={value}
              placeholder={"Input your short pass"}
              maxLength={5}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <input
              className="button-submit"
              type={"submit"}
              value={"Send"}
              onClick={() => {
                createList(value)
              }}
            />
          </div>
        </div>
      </div>
      <BoxList listPass={listPass} isLoading={isLoading} />
    </div>
  );
}

export default App;
