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
    document.getSelection().removeAllRanges();
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
      <div className="mb-3 mt-2" style = {{color:props.mode==="dark"?"white":"#042743"}}>
        <h1 className="mb-4">{props.heading}</h1>
        <textarea
        style = {{backgroundColor:props.mode==="dark"?"#13466e":"white",color:props.mode==="dark"?"white":"#042743"}}
          className="form-control"
          id="mybox"
          value={text}
          onChange={handeleOnchange}
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleCilck}>
        Convert to UpperCase
      </button>
      <button disabled={text.length ===0} className="btn btn-success mx-1 my-1" onClick={handleCilckLower}>
        Convert to LowerCase
      </button>
      <button disabled={text.length ===0} className="btn btn-success mx-1 my-1" onClick={handleCopy}>
        Copy Text
      </button>
      <button disabled={text.length ===0} className="btn btn-success mx-1 my-1" onClick={handleExtraSpace}>
        Remove Extra Sapces
      </button>
      <button disabled={text.length ===0} className="btn btn-danger mx-1 my-1" onClick={handleClaerText}>
        Clear Text
      </button>

      <div className="container my-4" style = {{color:props.mode==="dark"?"white":"#042743"}}>
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").filter((ele)=>{return ele.length !==0}).length} words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").filter((ele)=>{return ele.length !==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview it here"}</p>
      </div>
    </>
  );
}
