import { Component } from "react";
import NotificationButton from "./NotificationButton";
import styled from "styled-components";
import { currentLanguage } from "../assets/data";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute; // bottom left position
  right: 5vh;
  bottom: 5vh;
  font-family: "Arial", serif;
`;

/**
 * This component displays a list of Buttons in a column, that can be pressed to send an API request to the backend
 * to generate a notification of a certain type, for a certain appliance, with a certain priority.
 */

const generateNotificationText = {
  en: "Generate notification...",
  it: "Genera una notifica...",
};

class ButtonsList extends Component {
  render() {
    return (
      <StyledDiv>
        {generateNotificationText[currentLanguage]}
        <NotificationButton type={"exit"} appliance={"fridge"} priority={4} />
        <NotificationButton
          type={"goal.set"}
          appliance={"Entire House"}
          priority={3}
        />
        <NotificationButton
          type={"suggestion"}
          appliance={"Air Conditioner"}
          priority={2}
        />
        <NotificationButton
          type={"invalid_type"}
          appliance={"television"}
          priority={1}
        />
      </StyledDiv>
    );
  }
}

export default ButtonsList;
