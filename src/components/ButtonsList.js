import { Component } from "react";
import NotificationButton from "./NotificationButton";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 5vh;
  bottom: 5vh;
`;

class ButtonsList extends Component {
  render() {
    return (
      <StyledDiv>
        <NotificationButton buttonText="Generate notification type #1" />
        <NotificationButton buttonText="Generate notification type #2" />
        <NotificationButton buttonText="Generate notification type #3" />
      </StyledDiv>
    );
  }
}

export default ButtonsList;
