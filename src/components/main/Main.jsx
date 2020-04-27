import React, { useContext, useEffect } from "react";
import { Context } from "../../Context";
import Typewriter from "typewriter-effect";
import "./styles.css";
import Twits from "../../components/twits/Twits";

function Main() {
  const { error, searchValue, handleChange, getTwits, twits } = useContext(
    Context
  );

  useEffect(() => {
    getTwits();
  }, [searchValue]);

  useEffect(() => {
    const interval = setInterval(() => {
      return twits.length > 1 ? getTwits() : false;
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, [twits]);

  const displayTwits = twits.map((twit, id) => {
    return <Twits data={twit} key={id} />;
  });
  const allTwits = (
    <>
      <p className="number-of-twits">{twits.length} twits were found:</p>
      <div className="mr-5 ml-5 row">{displayTwits}</div>
    </>
  );

  const displayErrorOrTwits = (
    <>
      {error.length > 1 && searchValue ? (
        <p className="error">{error}</p>
      ) : error.length > 1 && !searchValue ? (
        <></>
      ) : (
        allTwits
      )}
    </>
  );
  const typewriter = (
    <Typewriter
      options={{
        strings: [
          "Search for twits about your favorite stocks...",
          "No need to refresh the page. New twits upload automatically.",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
  return (
    <div className="text-center">
      <div className="div-intro-text">
        <p className="intro-text">{typewriter}</p>
      </div>
      <form className="h-100">
        <input
          className="text-center w-75 rounded-pill p-3"
          required
          type="text"
          value={searchValue}
          placeholder="for ex. AMZN"
          onChange={handleChange}
        />
      </form>
      {displayErrorOrTwits}
    </div>
  );
}

export default Main;
