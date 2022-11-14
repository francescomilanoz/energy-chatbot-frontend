import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../assets/colors";
import { lastMessageId, setLastMessageId } from "../../assets/data";
import axios from "axios";

const NotificationStyle = styled.button`
  background-color: ${colors.lightGreenBackground};
  border-radius: 10px;
  margin-top: 10px;
  padding: 7px;
  border: none;
  font-family: sans-serif;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  :hover {
    background-color: ${colors.hoverButtonColor};
    transition: 0.5s background;
  }
`;

/**
 * This component receives as props the message to be displayed and the triggerNextStep function.
 * It renders the chatbot message, and, if there are any, a button with the number of notifications, that can
 * be clicked to simulate the read notifications intent and receive the highest priority notification.
 */
class BuildMessage extends Component {
  constructor(props) {
    super(props);

    setLastMessageId(lastMessageId + 1);

    this.state = {
      trigger: false,
      messageId: lastMessageId, // necessary because the notification button is displayed just until messageId === lastMessageId. This is to avoid displaying the button in all the messages
      notificationsNumber: 0,
    };

    this.triggerNext = this.triggerNext.bind(this); // this.triggerNext will be the function that triggers the next step in steps.js
  }

  async waitForNextFetch() {
    return new Promise((res) => setTimeout(res, 1000)); // wait for 1 second before fetching notifications again
  }

  // fetch the number of notifications from the backend
  async requestNotificationNumber() {
    const URI = "http://localhost:8080/api/notifications/number";

    axios
      .get(URI, {
        crossdomain: true,
      })
      .then(async (response) => {
        this.setState({ notificationsNumber: parseInt(response.data) });
        await this.waitForNextFetch(); // wait for 1 second before fetching notifications again
        this.requestNotificationNumber();
      })
      .catch(async (error) => {
        this.setState({ notificationsNumber: 0 }); // if there is an error, number of notification is set to 0 to not display the button
        console.log("Error in fetching the number of notifications: " + error);
        await this.waitForNextFetch(); // wait for 1 second before trying again
        this.requestNotificationNumber();
      });
  }

  triggerNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep({
        trigger: "fetchNotifications", // if the notifications button is clicked, the next step is the one that fetches the notifications
      });
    });
  }

  componentDidMount() {
    this.requestNotificationNumber(); // fetch the number of notifications from the backend immediately after the component is mounted
  }

  render() {
    const { trigger, notificationsNumber } = this.state;
    return (
      <div className="message">
        <div>{this.props.message}</div>
        {!trigger && ( // show the number of notifications just if the button was not clicked, there are notifications and this is the last message
          <>
            {notificationsNumber > 0 && this.state.messageId === lastMessageId && (
              <NotificationStyle onClick={() => this.triggerNext()}>
                🔔 {notificationsNumber} new notification
                {notificationsNumber > 1 ? "s" : ""}
              </NotificationStyle>
            )}
          </>
        )}
      </div>
    );
  }
}

export default BuildMessage;
