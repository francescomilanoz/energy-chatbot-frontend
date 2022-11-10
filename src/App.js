import React, { Component } from "react";
import ChatbotUI from "./components/chatbot/ChatbotUI";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatbotUI />
      </div>
    );
  }
}

export default App;
