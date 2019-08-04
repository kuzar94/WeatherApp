import React, { Component } from "react";
import "./Form.css";
class Form extends Component {
  render() {
    return (
      <div className="form">
        <div className="titleForm">Did You liked Wheater App? </div>
        <div className="descriptionForm">
          Stay up to date with Weather! Sign-In with FaceBook or Gmail and we
          will send you the current weather every day to a postbox!
        </div>
        <div className="buttonSection">
          <button className="gmailButton">Login with Gmail</button>
          <button className="fbButton">Login with Facebook</button>
        </div>
        <form className="addEmail">
          <label>
            City:
            <input type="text" name="city" />
          </label>
          <input type="submit" value="Submit" className="submitAdd" />
        </form>
        <div className="removeForm">Want to remove your subscription?</div>
        <form class="removeEmail">
          <input type="submit" value="Remove" className="submitRemove" />
        </form>
      </div>
    );
  }
}
export default Form;
