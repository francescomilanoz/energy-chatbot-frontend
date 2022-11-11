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
        {this.props.buttonText}
      </ButtonStyle>
    );
  }
}

export default NotificationButton;
