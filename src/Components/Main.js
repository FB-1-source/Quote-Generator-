import React, { useState } from "react";

function Main() {
  const [text, settext] = useState("");
  const [author, setauthor] = useState("");

  function Clicked() {
    let num = Math.floor(Math.random() * 1643);
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        settext(data[num].text);
        setauthor(data[num].author);
      });
  }
  return (
    <div className="quote">
      <div className="top">
        <h1>Welcome!</h1>
        <button onClick={Clicked} id="btn">
          Get Quote
        </button>
      </div>
      <div className="box">
        <h1 id="fir">{text}</h1>
        <h2 id="fir2">{author}</h2>
      </div>
    </div>
  );
}

export default Main;
