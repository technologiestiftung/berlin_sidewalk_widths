import React from "react";
import styled from "styled-components";
// import Transition from "react-transition-group/Transition";

const LoadingBackground = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  position: absolute;
  z-index: 1000;
  transition: all 0.5s ease-in-out;
  display: ${(p) => (p.loading ? "block" : "none")};
  ${"" /* opacity: ${p => opacityFromState(p.state)}; */}
  ${"" /* display: ${p => (p.state == 'exited') ? 'none' : 'block'}; */}
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  z-index: 10000;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
  user-select: none;
  pointer-events: none;

  span {
    padding-top: 20px;
    font-size: 13px;
    letter-spacing: 0.25px;
  }
`;

// state={state}

const LoadingOverlay = (p) => {
  const { isLoading } = p;
  return (
    <LoadingBackground loading={isLoading}>
      <SpinnerWrapper>
        <span>Lade Daten ...</span>
      </SpinnerWrapper>
    </LoadingBackground>
  );
};

export default LoadingOverlay;
