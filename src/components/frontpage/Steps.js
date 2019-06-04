import React from "react";
import styled from "styled-components";
import Step from "./Step";

const StepDiv = styled.div`
  margin: auto;
  display: flex;
  font-size: 14px;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 1024px) {
    width: 80%;
  }
`;

const Steps = () => (
  <StepDiv>
    <Step
      img={"/images/mapSymbol.png"}
      stepHeading={"Create a map"}
      spanTxt={
        "that will work as a visual planner. In the map you can add pins to places you would like to visit on your next trip."
      }
    />
    <Step
      img={"/images/layerSymbol.png"}
      stepHeading={"Add layers"}
      spanTxt={
        "to the map. Just share the magic link. Now you and your friends can plan the perfect group trip together."
      }
    />
    <Step
      img={"/images/analyseSymbol.png"}
      stepHeading={"Start analysing"}
      spanTxt={
        "by combining information from sites you prefer getting travel inspiration, including tips from friends. Just add links to prefered sites to the pins."
      }
    />
  </StepDiv>
);
export default Steps;
