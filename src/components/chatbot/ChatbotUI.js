import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import steps from "./steps";
import leaf from "../../assets/images/leaf.png";
import { colors } from "../../assets/colors";

const theme = {
  background: colors.whiteBackground,
  fontFamily: "sans-serif",
  headerBgColor: colors.primary,
  headerFontColor: "white",
  headerFontSize: "20px",
  botBubbleColor: colors.primary,
  botFontColor: "white",
  userBubbleColor: "white",
  userFontColor: "black",
};

class ChatbotUI extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          width={"60vh"}
          height={"85vh"}
          userDelay={0}
          headerTitle={"💡 EcoBot"}
          botAvatar={leaf}
        />
      </ThemeProvider>
    );
  }
}

export default ChatbotUI;
