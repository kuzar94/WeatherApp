import React, { Component } from "react";
import "./FAQ.css";
class FAQ extends Component {
  render() {
    return (
      <div className="help">
        <div className="titleHelp">FAQ</div>
        <div className="textHelp">
          <div className="question">
            "No data, wait or try again later"
            <div className="answer">
              {" "}
              You may have entered the incorrect city name in the personalize
              section. This problem also appears when the application cannot
              download the weather data from the server.
            </div>
          </div>
          <div className="question">
            I noticed the problem, what should I do?
            <div className="answer">
              {" "}
              If you notice any bug or inaccuracy please contact me.
            </div>
          </div>
          <div className="question">
            How to contact the creator?
            <div className="answer">
              {" "}
              Write to me on github. My account is https://github.com/kuzar94
            </div>
          </div>
          <div className="question">
            How can I see the source of the code?
            <div className="answer"> https://github.com/kuzar94/WeatherApp</div>
          </div>
        </div>
      </div>
    );
  }
}
export default FAQ;
