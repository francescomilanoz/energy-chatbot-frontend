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

class BuildMessage extends Component {
  constructor(props) {
    super(props);

    setLastMessageId(lastMessageId + 1);

    this.state = {
      trigger: false,
      messageId: lastMessageId,
      notificationsNumber: 0,
    };

    this.triggerNext = this.triggerNext.bind(this);
  }

  async waitForNextFetch() {
    return new Promise((res) => setTimeout(res, 1000));
  }

  async requestNotificationNumber() {
    const URI = "http://localhost:8080/api/notifications/number";

    axios
      .get(URI, {
        crossdomain: true,
      })
      .then(async (response) => {
        this.setState({ notificationsNumber: parseInt(response.data) });
        await this.waitForNextFetch();
        this.requestNotificationNumber();
      })
      .catch(async (error) => {
        this.setState({ notificationsNumber: 0 });
        console.log("Error in fetching the number of notifications: " + error);
        await this.waitForNextFetch();
        this.requestNotificationNumber();
      });
  }

  triggerNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep({
        trigger: "fetchNotifications",
      });
    });
  }

  componentDidMount() {
    this.requestNotificationNumber();
  }

  render() {
    const { trigger, notificationsNumber } = this.state;
    return (
      <div className="message">
        <div>{this.props.message}</div>
        {!trigger && (
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
