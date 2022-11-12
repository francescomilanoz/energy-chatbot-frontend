import React, { Component } from "react";
import ChatbotUI from "./components/chatbot/ChatbotUI";
import "./App.css";
import ButtonsList from "./components/ButtonsList";

/**
 * Main component of the application.
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatbotUI />
        <ButtonsList />
      </div>
    );
  }
}

export default App;
