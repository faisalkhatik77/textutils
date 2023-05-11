import React, { useState } from "react";

export default function TextArea(props) {
  const handleUpClick = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success")
  };

  const handleLoClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success")
  };

  const handleCapClick = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert("Converted to CapitalizeCase","success")
  };

  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("All Text Clear","success")
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied","success")
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed","success")
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  

  const [text, setText] = useState("");

  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='light'?'white':'black',color: props.mode==='dark'?'white':'black'}}
          id="myBox"
          rows="10"
        ></textarea>
        <button
          type="button"
          disabled={text.length===0}
          className="btn btn-primary my-3 mx-2"
          onClick={handleUpClick}
        >
          Convert to UPPERCASE
        </button>

        <button
          type="button"
          disabled={text.length===0}
          className="btn btn-warning my-3 mx-2"
          onClick={handleLoClick}
        >
          Convert to lowercase
        </button>

        <button
          type="button"
          disabled={text.length===0}
          className="btn btn-light my-3 mx-2"
          onClick={handleCapClick}
        >
          Convert to Capitalizecase
        </button>

        <button
          type="button"
          disabled={text.length===0}
          className="btn btn-secondary my-3 mx-2"
          onClick={handleCopy}
        >
          Copy All Text
        </button>

        <button
          type="button"
          disabled={text.length===0}
          className="btn btn-info my-3 mx-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>

        <button
          type="button"
          disabled={text.length===0}
          className="btn btn-danger my-3 mx-2"
          onClick={handleClearClick}
        >
          Clear All Text
        </button>

      </div>

      <div className="container my-3">
        <h2>Your Text summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Read in Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter Something in the TextBox above to preview it here"}</p>
      </div>
    </div>
  );
}
