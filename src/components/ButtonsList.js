import { Component } from "react";
import NotificationButton from "./NotificationButton";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 5vh;
  bottom: 5vh;
  font-family: "Arial", serif;
`;

class ButtonsList extends Component {
  render() {
    return (
      <StyledDiv>
        Generate notification...
        <NotificationButton type={"area"} appliance={"fridge"} priority={101} />
        <NotificationButton type={"goal"} appliance={"home"} priority={100} />
        <NotificationButton
          type={"goal"}
          appliance={"dishwasher"}
          priority={3}
        />
      </StyledDiv>
    );
  }
}

export default ButtonsList;
