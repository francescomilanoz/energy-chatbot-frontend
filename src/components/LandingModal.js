import { useState } from "react";
import { Modal, Typography } from "@mui/material";
import styled from "styled-components";
import { colors } from "../assets/colors";
import ScenarioDescription from "./ScenarioDescription";

/**
 * This component generates a modal that can be used by the user to have a recap of the landing page.
 */

const BoxStyle = styled("Box")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 50%;
  background-color: ${colors.whiteBackground};
  box-shadow: 5px 5px 5px #818181;
  text-align: center;
  padding: 20px;
`;

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

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute; // bottom left position
  right: 5vh;
  bottom: 5vh;
  font-family: "Arial", serif;
`;

function LandingModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <StyledDiv>
        <ButtonStyle onClick={handleOpen}>Riassunto dello scenario</ButtonStyle>
      </StyledDiv>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxStyle>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <ScenarioDescription />
          </Typography>
        </BoxStyle>
      </Modal>
    </>
  );
}

export default LandingModal;
