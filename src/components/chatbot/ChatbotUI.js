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

/**
 * This component displays the chatbot, using the react-simple-chatbot library.
 */
class ChatbotUI extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps} // used to define the conversation flow, and enable/disable the TextArea
          width={"60vh"}
          height={"85vh"}
          userDelay={0} // used to remove the delay before printing the bubble with the user message
          headerTitle={"💡 EcoBot"}
          botAvatar={leaf}
        />
      </ThemeProvider>
    );
  }
}

export default ChatbotUI;
