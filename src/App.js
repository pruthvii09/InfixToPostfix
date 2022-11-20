import React, { Component } from "react";
import "./App.css";
import Converter from "./Components/Converter/Converter";
import Navbar from "./Components/Navbar/Navbar";

class App extends Component {
  state = {
    submitted: false,
    infix: "",
    inputValue: "",
  };

  inputChangeHandler = (e) => {
    this.setState({
      submitted: false,
      inputValue: e.target.value,
    });
  };

  submitHandler = () => {
    let infix = this.state.inputValue;
    infix = infix.replace(/\s+/g, "");
    if (CheckInputValue(infix)) {
      this.setState({
        infix: infix,
        submitted: true,
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar />

        <div className="App">
          <h2 className="heading">Infix to postfix Converter</h2>
          <p>This Website Converts Infix Expressions To Postfix</p>
          <br></br>
          <p>
            Press on Convert Button To Convert your infix expression to Postfix
          </p>
          <div className="input-container">
            <input
              className="infix-input"
              placeholder="Enter infix expression"
              onChange={this.inputChangeHandler}
            ></input>
            <button className="convert-btn" onClick={this.submitHandler}>
              Convert
            </button>
          </div>
          {this.state.submitted ? <Converter infix={this.state.infix} /> : null}
        </div>
        <div
          className="footer"
          style={{ display: this.state.submitted ? "block" : "none" }}
        >
          <p>
            Made by{" "}
            <a href="https://portfolio-pruthviraj.vercel.app/">
              Pruthviraj Auti
            </a>
          </p>
        </div>
      </div>
    );
  }
}

function CheckInputValue(str) {
  if (/[^$^*()[\]{}+/\-A-z0-9]/g.test(str))
    return alert(
      "Unsupported characters present.\nValid characters: alphabets[a-z,A-Z], Numbers[0-9], +,-,/,*,^,(),[],{}"
    );
  return true;
}

export default App;
