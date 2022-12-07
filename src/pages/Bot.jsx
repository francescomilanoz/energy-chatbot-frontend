import React, { Component } from "react";
import ChatbotUI from "../components/chatbot/ChatbotUI";
import "../App.css";

/**
 * Main component of the application.
 */
class Bot extends Component {
  render() {
    return (
      <div className="App">
        <ChatbotUI />
      </div>
    );
  }
}

export default Bot;
