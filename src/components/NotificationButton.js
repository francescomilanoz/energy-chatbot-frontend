import { Component } from "react";
import styled from "styled-components";
import { colors } from "../assets/colors";
import axios from "axios";

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

/**
 * This function makes an API call to the backend to create a new notification.
 */
async function createNotification(type, appliance, priority) {
  await axios
    .post("http://localhost:8080/api/notifications/", {
      type: type,
      appliance: appliance,
      priority: priority,
    })
    .catch((error) => {
      console.log(error);
    });
}

/**
 * This class represents the button that is used to create a new notification on the backend when pressed.
 * It will display a text to understand the type of notification that will be created, and the appliance and priority.
 */
class NotificationButton extends Component {
  render() {
    return (
      <ButtonStyle
        onClick={() =>
          createNotification(
            this.props.type,
            this.props.appliance,
            this.props.priority
          )
        }
      >
        Of type {this.props.type.toUpperCase()} for
        {" " + this.props.appliance.toUpperCase()} with priority
        {" " + this.props.priority}
      </ButtonStyle>
    );
  }
}

export default NotificationButton;
