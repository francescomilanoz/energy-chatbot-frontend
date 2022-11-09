import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import steps from "./steps";

const config = {
  width: "400px",
  height: "500px",
  floating: false,
};

// all available theme props
const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#EF6C00",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#EF6C00",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

class ChatbotUI extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} {...config} />
      </ThemeProvider>
    );
  }
}

export default ChatbotUI;
