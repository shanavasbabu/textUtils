import React, { useState } from "react";

export default function TextFrom(props) {
  const [text, setText] = useState("");

  const handleCilck = () => {
    // console.log("onclick" + text);
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    props.showAlert("Converted to UpperCase!","success");
  };
  const handleCilckLower = () => {
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
    props.showAlert("Converted to LowerCase!","success");
  };
  const handleClaerText = () => {
    let clearText = "";
    setText(clearText);
    props.showAlert("Text is Cleared!","success");
  };
  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!","success");
  };
  const handleExtraSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handeleOnchange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  return (
    <>
      <div className="mb-3" style = {{color:props.mode==="dark"?"white":"#042743"}}>
        <h1>{props.heading}</h1>
        <textarea
        style = {{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"#042743"}}
          className="form-control"
          id="mybox"
          value={text}
          onChange={handeleOnchange}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleCilck}>
        Convert to UpperCase
      </button>
      <button className="btn btn-success mx-3" onClick={handleCilckLower}>
        Convert to LowerCase
      </button>
      <button className="btn btn-success mx-3" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-success mx-3" onClick={handleExtraSpace}>
        Remove Extra Sapces
      </button>
      <button className="btn btn-danger mx-3" onClick={handleClaerText}>
        Clear Text
      </button>

      <div className="container my-4" style = {{color:props.mode==="dark"?"white":"#042743"}}>
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length - 1} words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length - 0.008} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to preview it here"}</p>
      </div>
    </>
  );
}
