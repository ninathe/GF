import React from "react";
import styled from "styled-components";
import {Button} from "./ButtonComponents";


const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  @media (min-width: 768px) {
    align-items: center;
    align-self: flex-end;
    background-image: url('../images/plasticPollution.jpg');
  }
  @media (min-width: 1024px) {
    height: 450px;
  }
`;


const Test = styled(Button)`
  background-color: #ffffff82;
  border-color: #50808E;
  color: #50808E;
`
const Header = props => (
  <HeaderDiv>
    <div>
      <Button>Sign up</Button>
      <Test>Already user</Test>
    </div>
  </HeaderDiv>
);

export default Header;