import React, { useState } from "react";
import axios from "axios";

const Context = React.createContext();

function ContextProvider(props) {
  const [searchValue, setSearchValue] = useState("");
  const [twits, setTwits] = useState([]);
  const [error, setAnError] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSearchValue(() => newValue.trim());
  };

  const getTwits = () => {
    axios
      .get(
        `https://api.stocktwits.com/api/2/streams/symbol/${searchValue}.json `
      )
      .then((res) => {
        setAnError("");
        setTwits(res.data.messages);
      })
      .catch((err) => {
        setTwits([]);
        setAnError("No twits matching the Stock symbol were found!");
      });
  };

  return (
    <Context.Provider
      value={{ error, searchValue, handleChange, getTwits, twits }}
    >
      {props.children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
