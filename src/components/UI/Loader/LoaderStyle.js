import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
`;

export const LoaderStyle = styled.div`
  color: #ff8000;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  background: #ff8000;
  -webkit-animation: ${rotate} 1s infinite ease-in-out;
  animation: ${rotate} 1s infinite ease-in-out;
  width: 1em;
  height: 4em;

  :before {
    background: #ff8000;
    -webkit-animation: ${rotate} 1s infinite ease-in-out;
    animation: ${rotate} 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
    position: absolute;
    top: 0;
    content: "";
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  :after {
    background: #ff8000;
    -webkit-animation: ${rotate} 1s infinite ease-in-out;
    animation: ${rotate} 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
    position: absolute;
    top: 0;
    content: "";
    left: 1.5em;
  }
`;