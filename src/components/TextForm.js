import React, { useState } from "react";
import "./TextForm.css";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleCopy = () => {
    let Text = document.getElementById("myBox");
    navigator.clipboard.writeText(Text.value);
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
  };
  return (
    <>
      <div className="main">
        <div className="container my-5">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h5>{props.heading}</h5>
                </div>
                <div className="card-body">
                  <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    id="myBox"
                    rows="7"
                  ></textarea>
                </div>
                <div className="card-footer">
                  <p>
                    <strong>Text Summary: </strong>{" "}
                    {
                      text.split(/\s+/).filter((element) => {
                        return element.length !== 0;
                      }).length
                    }{" "}
                    Words and {text.length} Characters{" "}
                  </p>
                  <p>
                    <strong>Reading Time: </strong>
                    {0.008 *
                      text.split(" ").filter((element) => {
                        return element.length !== 0;
                      }).length}{" "}
                    Minutes To Read !
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            {" "}
            <button
              disabled={text.length === 0}
              type="button"
              className="btn btn-success btn-sm my-3 "
              onClick={handleUpClick}
            >
              Convert To Uppercase
            </button>
            <button
              disabled={text.length === 0}
              type="button"
              className="btn btn-warning btn-sm my-3 mx-2"
              onClick={handleLoClick}
            >
              Convert To Lowercase
            </button>
            <button
              disabled={text.length === 0}
              type="button"
              className="btn btn-info btn-sm my-1"
              onClick={handleRemoveSpace}
            >
              Remove Extra Space
            </button>
            <button
              disabled={text.length === 0}
              type="button"
              className="btn btn-danger btn-sm my-1 mx-2"
              onClick={handleClearText}
            >
              Clear Text
            </button>
          </div>

          <div className="card my-3">
            <h5 className="card-header">Analyzed Text:</h5>
            <div className="card-body">
              <p className="card-text">
                {text.length > 0
                  ? text
                  : "Nothing To Preview: Please Enter Text To Get Preview!"}
              </p>
              <button
                disabled={text.length === 0}
                type="button"
                className="btn btn-secondary btn-sm my-3 mx-1"
                onClick={handleCopy}
              >
                Copy Text
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
