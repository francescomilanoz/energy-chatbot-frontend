import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../assets/colors";
import {
  lastMessageId,
  notificationsNumber,
  setLastMessageId,
} from "../../assets/data";

const NotificationsButton = styled.button`
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

class Notifications extends Component {
  constructor(props) {
    super(props);

    setLastMessageId(lastMessageId + 1);

    this.state = {
      trigger: false,
      messageId: lastMessageId,
    };

    this.triggerNext = this.triggerNext.bind(this);
  }

  triggerNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }

  render() {
    const { trigger } = this.state;

    return (
      <div className="notifications">
        {!trigger && (
          <>
            <div>{this.props.message}</div>
            {notificationsNumber > 0 &&
              this.state.messageId === lastMessageId && (
                <NotificationsButton onClick={() => this.triggerNext()}>
                  Read Notifications
                </NotificationsButton>
              )}
          </>
        )}
        {trigger && <div>{"Okay! I'm fetching your notifications!"}</div>}
      </div>
    );
  }
}

export default Notifications;
