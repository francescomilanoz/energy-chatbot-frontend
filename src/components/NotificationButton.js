import { Component } from "react";
import styled from "styled-components";
import { colors } from "../assets/colors";
import { notificationsNumber } from "../assets/data";

const ButtonStyle = styled.button`
  background-color: ${colors.primary};
  border-radius: 10px;
  margin-top: 10px;
  padding: 15px;
  border: none;
  font-family: sans-serif;
  color: ${colors.whiteBackground};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  :hover {
    background-color: ${colors.primaryDark};
    transition: 0.5s background;
  }
`;

function increaseNotificationsCount() {
  notificationsNumber += 1;
  console.log(notificationsNumber);
}

class NotificationButton extends Component {
  render() {
    return (
      <ButtonStyle onClick={increaseNotificationsCount}>
        {this.props.buttonText}
      </ButtonStyle>
    );
  }
}

export default NotificationButton;
