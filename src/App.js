import "./App.css";
import React, { useState } from "react";
import BoxData from "./components/box/BoxData";
import BoxList from "./components/box/BoxList";

let id = 0;
let isLoading = false;

function App() {
  const [value, setValue] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [listPass, setListPass] = useState([]);

  const createRandomPassword = (e) => {
    const randomInt = Math.round(Math.random() * 40000);
    const date = new Date();
    if(seconds < 1000) {
      return simpel(e)
    } else if (seconds < 10000) {
      return medium(e, date, randomInt)
    } else {
      return hard(e, date, randomInt)
    }
  };

  const simpel = (e) => {
    return "Ki2_Oi"+e
  }

  const medium = (e, date, random) => {
    return `${random}!(PkA+${e.replaceAll(
      " ",
      "%20"
    )}${date.getFullYear()}`;
  }

  const hard = (e, date, random) => {
    const word = e.toUpperCase()
    const dateTime = date.getTime()
    return `${dateTime}Xx${word}${random}`
  }

  const customDelay = () => {
    let i = Math.round(Math.random() * 10000);
    setSeconds(i);
  };

  const createList = (value) => {
    if (value !== "") {
      isLoading = true;
      setValue("");
      setTimeout(() => {
        isLoading = false;
        setListPass([
          ...listPass,
          { id: id++, password: createRandomPassword(value) },
        ]);
      }, seconds);
    } else {
      alert("Isi terlrbih Dahulu");
    }
  };

  return (
    <div className="App-header">
      <div className="container-view-create">
        <BoxData
          generate={isLoading ? "Generating Password" : "Generator Password"}
          image={"bayuLogo.png"}
        />
        <div className="container-input-pass">
          <div className="container-name">
            <input
              className="input-value"
              type={"text"}
              value={value}
              placeholder={"Input your short pass"}
              maxLength={5}
              readOnly={isLoading}
              onChange={(e) => {
                setValue(e.target.value);
                customDelay();
              }}
            />
            <input
              className="button-submit"
              type={"submit"}
              value={"Send"}
              onClick={() => {
                createList(value);
              }}
            />
          </div>
        </div>
      </div>
      <BoxList
        listPass={listPass}
        isLoading={isLoading}
        second={Math.round(seconds / 1000)}
      />
    </div>
  );
}

export default App;
