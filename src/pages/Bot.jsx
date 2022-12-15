import React, { Component } from "react";
import ChatbotUI from "../components/chatbot/ChatbotUI";
import "../App.css";
import ButtonsList from "../components/ButtonsList";
import LandingModal from "../components/LandingModal";

/**
 * Main component of the application.
 */
class Bot extends Component {
  render() {
    return (
      <div className="App">
        <ChatbotUI />
        <LandingModal />
      </div>
    );
  }
}

export default Bot;
