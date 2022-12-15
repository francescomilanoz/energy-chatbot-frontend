import React from "react";
import { Route, Routes } from "react-router-dom";
import Bot from "./Bot";
import useNavigateToPage from "../hooks/useNavigation";
import styled from "styled-components";
import { colors } from "../assets/colors";
import ScenarioDescription from "../components/ScenarioDescription";

/**
 * Landing page. Used for testing purposes.
 */

const HalfPageDiv = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 50%;
  flex-direction: column;
  margin: auto;
  text-align: center;
`;

const ButtonStyle = styled.button`
  background-color: ${colors.primary};
  border-radius: 10px;
  padding: 25px;
  border: none;
  font-family: sans-serif;
  color: ${colors.whiteBackground};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  margin: auto;
  :hover {
    background-color: ${colors.primaryDark};
    transition: 0.5s background;
  }
`;

function Landing() {
  const navigate = useNavigateToPage("bot");
  return (
    <div>
      <h1>{"💡EcoBot"}</h1>
      <HalfPageDiv>
        <ScenarioDescription />
      </HalfPageDiv>
      <ButtonStyle onClick={navigate}>{"Vai al Chatbot"}</ButtonStyle>
      <Routes>
        <Route exact path="/bot" element={<Bot />} />
      </Routes>
    </div>
  );
}

export default Landing;
