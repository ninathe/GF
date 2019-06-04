import styled from "styled-components";

const Button = styled.button`
  background-color: #50808E;
  color: white;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: 10px 24px;
  text-decoration: none;
  border-radius: 30px;
  margin: 10px 20px;
  width: 200px;
  border: 2px solid white;
  &:hover {
    background: rgb(151, 183, 204);
  }
`;
const LinedButton = styled(Button)`
  background-color: #ffffff82;
  border-color: #50808E;
  color: #50808E;
`;

export {Button, LinedButton};